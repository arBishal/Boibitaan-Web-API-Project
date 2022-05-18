import React, { useState } from "react";
import signUpStyle from "./signUp.module.css";
import InputText from "./src/ui-custom-components/InputText";

function SignUp() {
  return (
    <div className={signUpStyle.signUpPage}>
      <div className={signUpStyle.signUpForm}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p> পূর্ণ নাম </p>
          <InputText
            className={signUpStyle.inputStyle}
            placeholder="পূর্ণ নাম লিখুন"
          ></InputText>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p> ই-মেইল </p>
          <InputText
            className={signUpStyle.inputStyle}
            placeholder="ই-মেইল লিখুন"
          ></InputText>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p> ফোন নাম্বার </p>
          <InputText
            className={signUpStyle.inputStyle}
            placeholder="ফোন নাম্বার লিখুন"
          ></InputText>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p> পাসওয়ার্ড </p>
          <InputText
            className={signUpStyle.inputStyle}
            placeholder="পাসওয়ার্ড দিন"
          ></InputText>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p> পাসওয়ার্ড নিশ্চিত করুন </p>
          <InputText
            className={signUpStyle.inputStyle}
            placeholder="পুনরায় পাসওয়ার্ড দিন"
          ></InputText>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
