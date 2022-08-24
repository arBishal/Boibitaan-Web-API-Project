import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import { checkCredential } from "../../../lib/auth-functionality";

const options = {
  site: process.env.NEXTAUTH_URL,
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        passHash: { label: "Password", type: "passHash" },
      },
      async authorize(req) {
        const email = req?.email as string;
        const passHash = req?.passHash as string;
        const { ok, data, message } = await checkCredential({
          email,
          passHash,
        });

        if (ok) {
          if (data) {
            return data;
          }
          throw new Error("Invalid Username Password!");
        } else {
          throw new Error(message as string);
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    encode: async ({ secret, token }) => {
      const jwtClaims: any = {
        //TODO: warning! sub should be string!
        sub: token?.id,
        email: token?.email,
        name: token?.name,
        phone: token?.phone,
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-default-role": "user",
          "x-hasura-role": "user",
          "x-hasura-user-id": token?.id,
        },
      };

      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: "HS256" });
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      //@ts-ignore
      const decodedToken = jwt.verify(token, secret, { algorithms: ["HS256"] });
      return decodedToken;
    },
  },

  pages: {
    signIn: "/auth/signin", // Displays signin buttons
    signOut: "/auth/signout", // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: "/home", // If set, new users will be directed here on first sign in
  },

  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      token.id = token.sub;
      // You must have to check it otherwise token.phone will be overwtriten by undefined!
      if (user) {
        token.phone = user?.phone;
      }
      return token;
    },
    async session({ session, token }) {
      //@ts-ignore
      const encodedToken = jwt.sign(token, process.env.JWT_SECRET, {
        algorithm: "HS256",
      });
      session.id = token.id;
      session.token = encodedToken;
      //@ts-ignore
      session.user.phone = token.phone;
      return Promise.resolve(session);
    },
  },
});
