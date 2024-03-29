import React, { useCallback, useState } from "react";
import authStyle from "../../styles/auth.module.css";
import InputText from "../../src/ui-base-components/InputText";
import InputPassword from "../../src/ui-base-components/InputPassword";
import Image from "next/image";
import landinglogo from "../../public/logo/logolanding.png";
import Button from "../../src/ui-base-components/Button";
import { sha256 } from "js-sha256";
import { error, success } from "../../src/ui-base-components/Modal";
import Router from "next/router";

interface SignUpInfoType {
  email: string;
  name: string;
  password: string;
  phone: string;
  "password-again": string;
}

const required = ["email", "name", "password", "phone"];

function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState<Partial<SignUpInfoType>>({});

  function handleChange(e) {
    const { id, value } = e.target;
    setSignUpInfo((prev) => {
      return { ...prev, [id]: value };
    });
  }

  const checkConstrains = useCallback((signUpInfo: Partial<SignUpInfoType>) => {
    var result: { verdict: boolean; message: string };

    required.forEach((item) => {
      if (signUpInfo[item] === undefined || signUpInfo[item] === "") {
        result = { verdict: false, message: "Please fill up all the field!" };
      }
    });
    if (result) return result;
    if (/^[0-9]+$/.test(signUpInfo.phone) == false)
      return { verdict: false, message: "Invalid Phone Number!" };
    else if (signUpInfo.password !== signUpInfo["password-again"])
      return { verdict: false, message: "Password didn't matched!" };
    else result = { verdict: true, message: "Constrain matched!" };
    return result;
  }, []);

  const submit = useCallback(async (signUpInfo: Partial<SignUpInfoType>) => {
    const result = checkConstrains(signUpInfo);
    if (result.verdict) {
      const response = await fetch("/api/signUp", {
        method: "POST",
        body: JSON.stringify({
          name: signUpInfo.name,
          email: signUpInfo.email,
          phone: signUpInfo.phone,
          //@ts-ignore
          passHash: sha256(signUpInfo.password),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log(await response.json());
        success("দারুণ!", "কাজটি সফল হয়েছে।");
        Router.push("/auth/signin");
      } else {
        error("দুক্ষিত", response.message);
      }
    } else {
      error("দুক্ষিত", result.message);
    }
  }, []);

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
          <p style={{ marginBottom: "3px" }}> পূর্ণ নাম </p>
          <InputText
            status={signUpInfo?.name?.length === 0 && "error"}
            id="name"
            type="required"
            placeholder="পূর্ণ নাম লিখুন"
            value={signUpInfo?.name}
            onChange={handleChange}
          />
        </div>
        <div className={authStyle.authInput}>
          <p style={{ marginBottom: "3px" }}> ফোন নাম্বার </p>
          <InputText
            status={signUpInfo?.phone?.length === 0 && "error"}
            type="required"
            placeholder="ফোন নাম্বার লিখুন"
            id="phone"
            value={signUpInfo?.phone}
            onChange={handleChange}
          />
        </div>
        <div className={authStyle.authInput}>
          <p style={{ marginBottom: "3px" }}> ই-মেইল </p>
          <InputText
            id="email"
            type="required"
            status={signUpInfo?.email?.length === 0 && "error"}
            value={signUpInfo?.email}
            placeholder="ই-মেইল লিখুন"
            onChange={handleChange}
          />
        </div>
        <div className={authStyle.authInput}>
          <p style={{ marginBottom: "3px" }}> পাসওয়ার্ড </p>
          <InputPassword
            id="password"
            type="required"
            status={signUpInfo?.password?.length === 0 && "error"}
            placeholder="পাসওয়ার্ড দিন"
            onChange={handleChange}
          />
        </div>
        <div className={authStyle.authInput}>
          <p style={{ marginBottom: "3px" }}> পাসওয়ার্ড নিশ্চিত করুন </p>
          <InputPassword
            type="required"
            status={
              signUpInfo?.password !== signUpInfo?.["password-again"] && "error"
            }
            placeholder="পুনরায় পাসওয়ার্ড দিন"
            id="password-again"
            onChange={handleChange}
            onPressEnter={() => submit(signUpInfo)}
          />
        </div>
        <Button
          style={{ marginTop: "20px", marginBottom: "-15px" }}
          onClick={() => submit(signUpInfo)}
        >
          সাইন আপ
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
