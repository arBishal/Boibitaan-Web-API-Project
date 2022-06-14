// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql } from "@apollo/client";
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/apollo-client";
import { findUserByEmail } from "../../lib/hasura_query";

type Data = {
  verdict: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, name, passHash, phone } = req.body;
  try {
    const dbResponse = await client.mutate({
      mutation: findUserByEmail(email, name, passHash, phone),
    });
    if (dbResponse?.data.insert_user.affected_rows === 0) {
      res.status(200).json({ verdict: false, message: "Use different Email!" });
    } else {
      res.status(200).json({ verdict: false, message: "Sign Up successfull" });
    }
  } catch (err) {
    console.log(err);
  }
}
