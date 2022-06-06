import React, { useState } from "react";
import ProfileInfoCardStyle from "./profileBody.module.css";
import InputText from "../src/ui-custom-components/InputText";
import InputTextArea from "../src/ui-custom-components/InputTextArea";
import Button from "../src/ui-custom-components/Button";

const ProfileInfoCard = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [bankId, setBankId] = useState<string>("");
  const [secretKey, setSecretKey] = useState<string>("");
  const [session, serSession] = useState<boolean>(true);

  return session ? (
    <div>
      <div className={ProfileInfoCardStyle.profileForm}>
        <div className={ProfileInfoCardStyle.inputStyle}>
          <p style={{ marginBottom: "3px" }}> পূর্ণ নাম </p>
          <InputText placeholder={name}></InputText>
        </div>
        <div className={ProfileInfoCardStyle.inputStyle}>
          <p style={{ marginBottom: "3px" }}> ই-মেইল </p>
          <InputText placeholder={email}></InputText>
        </div>
        <div className={ProfileInfoCardStyle.inputStyle}>
          <p style={{ marginBottom: "3px" }}> ফোন নাম্বার </p>
          <InputText placeholder={contact}></InputText>
        </div>
        <div className={ProfileInfoCardStyle.inputStyle}>
          <p style={{ marginBottom: "3px" }}> পূর্ণ ঠিকানা </p>
          <InputTextArea
            placeholder={address}
            autoSize={{ minRows: 2, maxRows: 6 }}
          ></InputTextArea>
        </div>
        <div className={ProfileInfoCardStyle.inputStyle}>
          <p style={{ marginBottom: "3px" }}> ব্যাংক অ্যাকাউন্ট </p>
          <InputText placeholder={bankId}></InputText>
        </div>
        <div className={ProfileInfoCardStyle.inputStyle}>
          <p style={{ marginBottom: "3px" }}> গোপন নাম্বার </p>
          <InputText placeholder={secretKey}></InputText>
        </div>
        <Button style={{ marginTop: "20px", marginBottom: "-15px" }}>
          সেভ করুন
        </Button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProfileInfoCard;
