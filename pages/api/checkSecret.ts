import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/apollo-client";
import { getUserSecrets } from "../../lib/hasura_query";
import { verifyJWT } from "../../lib/tokenVerification";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { token } = req.body;
    const response = verifyJWT(token);

    if (response) {
      const { id } = response;

      const { data } = await client.query({ query: getUserSecrets(id) });
      const { user } = data;
      if (user.length) {
        const { accountNumber, passHash, secretKey } = user[0];
        if (!secretKey || secretKey === "" || !accountNumber) {
          return res.status(200).json({ needUpdate: true });
        }
      }
    }
  } catch (err) {
    console.log({ err });
  }
  return res.status(200).json({ needUpdate: false });
}
