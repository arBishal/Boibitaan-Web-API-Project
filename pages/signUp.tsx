import React, { useState } from "react";
import signUpStyle from "./signUp.module.css";
import InputText from "./src/ui-custom-components/InputText";
import InputPassword from "./src/ui-custom-components/InputPassword";
import Image from "next/image";
import landinglogo from "../public/logo/logolanding.png";
import Button from "./src/ui-custom-components/Button";
import { sha256 } from "js-sha256";

const required = ["email", "name", "password", "phone"];

function SignUp() {
  const [data, setData] = useState({});

  function handleChange(e) {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  }

  function checkConstrains(data) {
    required.forEach((item) => {
      if (data[item] === undefined || data[item] === "") {
        return false;
      }
    });
    if (
      data.password !== data?.["password-again"] ||
      /^[0-9]+$/.test(data.phone) == false
    )
      return false;
    return true;
  }

  async function handleClick(e) {
    const result = checkConstrains(data);
    if (result) {
      const response = await fetch("/api/signUp", {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          passHash: sha256(data.password),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      alert("Please fill up the form properly!");
    }
  }

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
          <InputText
            id="name"
            type="required"
            placeholder="পূর্ণ নাম লিখুন"
            value={data?.name}
            onChange={handleChange}
          />
        </div>
        <div className={signUpStyle.signUpInput}>
          <p style={{ marginBottom: "3px" }}> ফোন নাম্বার </p>
          <InputText
            type="required"
            placeholder="ফোন নাম্বার লিখুন"
            id="phone"
            value={data?.phone}
            onChange={handleChange}
          />
        </div>
        <div className={signUpStyle.signUpInput}>
          <p style={{ marginBottom: "3px" }}> ই-মেইল </p>
          <InputText
            id="email"
            type="required"
            value={data?.email}
            placeholder="ই-মেইল লিখুন"
            onChange={handleChange}
          />
        </div>
        <div className={signUpStyle.signUpInput}>
          <p style={{ marginBottom: "3px" }}> পাসওয়ার্ড </p>
          <InputPassword
            id="password"
            type="required"
            placeholder="পাসওয়ার্ড দিন"
            onChange={handleChange}
          />
        </div>
        <div className={signUpStyle.signUpInput}>
          <p style={{ marginBottom: "3px" }}> পাসওয়ার্ড নিশ্চিত করুন </p>
          <InputPassword
            type="required"
            placeholder="পুনরায় পাসওয়ার্ড দিন"
            id="password-again"
            onChange={handleChange}
          />
        </div>
        <Button
          style={{ marginTop: "20px", marginBottom: "-15px" }}
          onClick={handleClick}
        >
          সাইন আপ
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
