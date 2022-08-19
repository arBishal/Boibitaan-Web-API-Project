import { signOut } from "next-auth/react";
import Router from "next/router";
import { CredentialType, User } from "./types";
import { checkAccountWithEmailPassHash } from "./hasura_query";
import client from "./apollo-client";

// Fast logout
export const logOut = async () => {
  const res = await signOut({ redirect: false, callbackUrl: "/" });
  Router.push(res.url);
};

export const checkCredential: (credential: CredentialType) => Promise<{
  ok: boolean;
  data?: null | User;
  message?: unknown;
}> = async ({ email, passHash }) => {
  try {
    const { data } = await client.mutate({
      mutation: checkAccountWithEmailPassHash(email, passHash),
    });
    
    const res = { ok: true, data: null };
    
    if (data.user.length) {
      res.data = data.user[0];
    }
    
    return res;
  } catch (err) {
    return { ok: false, message: err };
  }
};
