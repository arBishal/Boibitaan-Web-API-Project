import { SessionProvider, useSession, signIn } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import Loading from "../src/components/Loading";
import authStyle from "../styles/auth.module.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

function Auth({ children }: { children: any }) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  useEffect(() => {
    if (status === "loading") return;
    if (!isUser) Router.push("/auth/signin");
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    // TODO: WRONG CSS FILE -- BUT WORKS
    <div className={authStyle.authPage}> 
      <Loading />
    </div>
  );
}
