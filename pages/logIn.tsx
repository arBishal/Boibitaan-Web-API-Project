import React, { useState } from "react";
import signUpStyle from "./signUp.module.css";
import InputText from "./src/ui-custom-components/InputText";
import InputPassword from "./src/ui-custom-components/InputPassword";
import Image from "next/image";
import landinglogo from "../public/logo/logolanding.png";
import Button from "./src/ui-custom-components/Button";
import { useRouter } from "next/router";

function LogIn() {
  const router = useRouter();
  return (
    <div className={signUpStyle.signUpPage}>
      <div className={signUpStyle.signUpForm}>
        <div style={{ marginTop: "-15px" }}>
          <Image
            src={landinglogo}
            alt="boibitaanlogo"
            height="90vh"
            width="125vh"
          />
        </div>
        <div className={signUpStyle.signUpInput}>
          <p style={{ marginBottom: "3px" }}> ই-মেইল </p>
          <InputText placeholder="ই-মেইল লিখুন"></InputText>
        </div>
        <div className={signUpStyle.signUpInput}>
          <p style={{ marginBottom: "3px" }}> পাসওয়ার্ড </p>
          <InputPassword placeholder="পাসওয়ার্ড দিন"></InputPassword>
        </div>
        <Button
          style={{ marginTop: "20px", marginBottom: "-15px" }}
          onClick={() => router.push("/home")}
        >
          লগ ইন
        </Button>
      </div>
    </div>
  );
}

export default LogIn;
