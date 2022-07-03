import React, { useState } from "react";
import authStyle from "../../styles/auth.module.css";
import InputText from "../../src/ui-base-components/InputText";
import InputPassword from "../../src/ui-base-components/InputPassword";
import Image from "next/image";
import landinglogo from "../../public/logo/logolanding.png";
import Button from "../../src/ui-base-components/Button";
import { sha256 } from "js-sha256";
import Loading from "../../src/components/Loading";
import { getProviders, signIn } from "next-auth/react";
import Router from "next/router";

function SignIn({ providers }) {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (isLoading) {
    return (
      <div className={authStyle.authPage}>
        <Loading />
      </div>
    );
  }

  const handleSubmit = async () => {
    if (email === undefined || email === "") {
      alert("Please provide an email!");
    } else if (password === undefined || password === "") {
      alert("Please provide a password!");
    } else {
      setIsLoading((prev) => true);
      const res = await signIn(providers.credentials.id, {
        email,
        passHash: sha256(password),
        redirect: false,
        callbackUrl: "/home",
      });

      if (res?.ok) {
        Router.push("/home");
      } else {
        alert(res?.error);
      }
      setIsLoading((prev) => false);
    }
  };

  return (
    <div className={authStyle.authPage}>
      <div className={authStyle.authForm}>
        <div style={{ marginTop: "-15px" }}>
          <Image
            src={landinglogo}
            alt="boibitaanlogo"
            height="90vh"
            width="125vh"
          />
        </div>
        <div className={authStyle.authInput}>
          <p style={{ marginBottom: "3px" }}> ই-মেইল </p>
          <InputText
            id="email"
            placeholder="ই-মেইল লিখুন"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></InputText>
        </div>
        <div className={authStyle.authInput}>
          <p style={{ marginBottom: "3px" }}> পাসওয়ার্ড </p>
          <InputPassword
            id="password"
            placeholder="পাসওয়ার্ড দিন"
            onChange={(e) => setPassword(e.target.value)}
          ></InputPassword>
        </div>
        <Button
          style={{ marginTop: "20px", marginBottom: "-15px" }}
          onClick={handleSubmit}
        >
          লগ ইন
        </Button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  // const session = await getSession(context);
  // if (session) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/",
  //     },
  //   };
  // }
  return {
    props: {
      providers: await getProviders(),
    },
  };
}
export default SignIn;
