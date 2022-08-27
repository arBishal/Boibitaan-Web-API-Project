import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/apollo-client";
import { updateUserCredential } from "../../lib/hasura_query";
import { verifyJWT } from "../../lib/tokenVerification";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { token, accountNumber, secretKey } = req.body;
    const response = verifyJWT(token);

    if (response) {
      const { id } = response;
      try {
        const { data, errors } = await client.mutate({
          mutation: updateUserCredential(id, accountNumber, secretKey),
        });
        const { update_user } = data;
        if (update_user.affected_rows) {
          return res.status(200).json({ status: true, message: "Updated!" });
        }
      } catch (err) {
        
        return res.status(200).json({
          status: false,
          message: "constraint-violation: Invalid Bank Account",
        });
      }
    }
  } catch (err) {
    console.log({ err });
  }
  return res.status(200).json({ status: false, message: "invalid token" });
}
