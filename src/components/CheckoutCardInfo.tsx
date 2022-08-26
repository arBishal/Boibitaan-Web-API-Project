import React, { useState } from "react";
import CheckoutBodyStyle from "./checkoutBody.module.css";
import InputText from "../ui-base-components/InputText";
import InputTextArea from "../ui-base-components/InputTextArea";

const CheckoutCardInfo = () => {
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [session, serSession] = useState<boolean>(true);

  return session ? (
    <div className={CheckoutBodyStyle.checkoutInfoCard}>
      <div className={CheckoutBodyStyle.titleStyle}>
        <p style={{ marginBottom: "3px", fontWeight: "bold", fontSize: "16px" }}> ডেলিভারি সংক্রান্ত তথ্যাবলি </p>
      </div>
      <div className={CheckoutBodyStyle.inputStyle}>
        <p style={{ marginBottom: "3px" }}> পূর্ণ নাম </p>
        <InputText placeholder={name} ></InputText>
      </div>
      <div className={CheckoutBodyStyle.inputStyle}>
        <p style={{ marginBottom: "3px" }}> ফোন নাম্বার </p>
        <InputText placeholder={contact} ></InputText>
      </div>
      <div className={CheckoutBodyStyle.inputStyle}>
        <p style={{ marginBottom: "3px" }}> পূর্ণ ঠিকানা </p>
        <InputTextArea
          placeholder={address}
          autoSize={{ minRows: 3, maxRows: 6 }}
        ></InputTextArea>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CheckoutCardInfo;
