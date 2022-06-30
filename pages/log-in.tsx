import React, { useState } from "react";
import signUpStyle from "./signUp.module.css";
import InputText from "./src/ui-custom-components/InputText";
import InputPassword from "./src/ui-custom-components/InputPassword";
import Image from "next/image";
import landinglogo from "../public/logo/logolanding.png";
import Button from "./src/ui-custom-components/Button";
import { useRouter } from "next/router";
import axios from "axios";
import { sha256 } from "js-sha256";

function LogIn() {
  const router = useRouter();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async () => {
    if (email === undefined || email === "") {
      alert("Please provide an email!");
    } else if (password === undefined || password === "") {
      alert("Please provide a password!");
    } else {
      const res = await axios.post("/api/login", {
        email,
        passHash: sha256(password),
      });
      if (res.status === 200) {
        const { verdict, token, message } = res.data;
        if (verdict) {
          localStorage.setItem("token", token);
          router.push("/home");
        } else {
          alert(message);
        }
      }
    }
  };

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
          <InputText
            id="email"
            placeholder="ই-মেইল লিখুন"
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
          ></InputText>
        </div>
        <div className={signUpStyle.signUpInput}>
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


export default LogIn;
