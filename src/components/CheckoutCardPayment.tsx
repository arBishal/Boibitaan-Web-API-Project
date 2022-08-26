import React, { useState } from "react";
import CheckoutBodyStyle from "./checkoutBody.module.css";
import InputText from "../ui-base-components/InputText";
import Button from "../ui-base-components/Button";

const CheckoutCardPayment = () => {
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [session, serSession] = useState<boolean>(true);

  return session ? (
    <div className={CheckoutBodyStyle.checkoutInfoCard}>
      <div className={CheckoutBodyStyle.titleStyle}>
        <p
          style={{ marginBottom: "3px", fontWeight: "bold", fontSize: "16px" }}
        >
          {" "}
          লেনদেন সম্পর্কিত তথ্যাবলি{" "}
        </p>
      </div>
      <div className={CheckoutBodyStyle.inputStyle}>
        <p style={{ marginBottom: "3px" }}> ব্যাংক অ্যাকাউন্ট </p>
        <InputText placeholder={name}></InputText>
      </div>
      <div className={CheckoutBodyStyle.inputStyle}>
        <p style={{ marginBottom: "3px" }}> গোপন নাম্বার </p>
        <InputText placeholder={contact}></InputText>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CheckoutCardPayment;
