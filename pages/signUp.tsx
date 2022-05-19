import React, { useState } from "react";
import signUpStyle from "./signUp.module.css";
import InputText from "./src/ui-custom-components/InputText";
import InputPassword from "./src/ui-custom-components/InputPassword";
import Image from "next/image";
import landinglogo from "../public/image/logolanding.png";
import Button from "./src/ui-custom-components/Button";

function SignUp() {
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
          <p style={{ marginBottom: "3px" }}> পূর্ণ নাম </p>
          <InputText placeholder="পূর্ণ নাম লিখুন"></InputText>
        </div>
        <div className={signUpStyle.signUpInput}>
          <p style={{ marginBottom: "3px" }}> ই-মেইল </p>
          <InputText placeholder="ই-মেইল লিখুন"></InputText>
        </div>
        <div className={signUpStyle.signUpInput}>
          <p style={{ marginBottom: "3px" }}> ফোন নাম্বার </p>
          <InputText placeholder="ফোন নাম্বার লিখুন"></InputText>
        </div>
        <div className={signUpStyle.signUpInput}>
          <p style={{ marginBottom: "3px" }}> পাসওয়ার্ড </p>
          <InputPassword
            type="required"
            placeholder="পাসওয়ার্ড দিন"
          ></InputPassword>
        </div>
        <div className={signUpStyle.signUpInput}>
          <p style={{ marginBottom: "3px" }}> পাসওয়ার্ড নিশ্চিত করুন </p>
          <InputPassword placeholder="পুনরায় পাসওয়ার্ড দিন"></InputPassword>
        </div>
        <Button style={{ marginTop: "20px", marginBottom: "-15px" }}>
          সাইন আপ
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
