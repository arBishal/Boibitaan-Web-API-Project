import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import client from "../../lib/apollo-client";
import { checkAccountWithEmailPassHash } from "../../lib/hasura_query";

type Data = {
  verdict: boolean;
  message: string;
  token?: string;
};

const Login: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { email, passHash } = req.body;

  try {
    const dbResponse = await client.query({
      query: checkAccountWithEmailPassHash(email, passHash),
    });
    if (dbResponse.data?.user.length) {
      const { name, id, phone, email } = dbResponse.data.user[0];
      const token = jwt.sign(
        {
          name,
          id,
          phone,
          email,
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["client"],
            "x-hasura-default-role": "client",
          },
        },
        `${process.env.JWT_SECRET}`
      );
      res
        .status(200)
        .json({ verdict: true, token, message: "Login Successfull!" });
    } else {
      res
        .status(200)
        .json({ verdict: false, message: "Invalid email and password!" });
    }
  } catch (err) {
    console.log(err);
  }
};

export default Login;
