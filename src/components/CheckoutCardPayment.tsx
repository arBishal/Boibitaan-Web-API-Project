import React, { useState } from "react";
import CheckoutBodyStyle from "./checkoutBody.module.css";
import InputText from "../ui-base-components/InputText";
import InputPassword from "../ui-base-components/InputPassword";
import { PurchaceRequest } from "../../lib/types";

const CheckoutCardPayment = ({
  accountNumber,
  secretKey,
  setPurchaceRequest,
}: {
  accountNumber: number;
  secretKey: string;
  setPurchaceRequest: React.Dispatch<
    React.SetStateAction<PurchaceRequest | undefined>
  >;
}) => {
  const handleChange = (e: { target: { id: string; value: string } }) => {
    const { id, value } = e.target;
    setPurchaceRequest((prev) => {
      const newPurchaceReq: PurchaceRequest = JSON.parse(JSON.stringify(prev));
      // @ts-ignore
      newPurchaceReq.clientInfo[id] = value;
      return newPurchaceReq;
    });
  };
  return (
    <div className={CheckoutBodyStyle.checkoutInfoCard}>
      <div className={CheckoutBodyStyle.titleStyle}>
        <p
          style={{ marginBottom: "3px", fontWeight: "bold", fontSize: "16px" }}
        >
          লেনদেন সম্পর্কিত তথ্যাবলি
        </p>
      </div>
      <div className={CheckoutBodyStyle.inputStyle}>
        <p style={{ marginBottom: "3px" }}> ব্যাংক অ্যাকাউন্ট </p>
        <InputText
          id="accountNumber"
          placeholder={"ব্যাংক অ্যাকাউন্ট"}
          value={accountNumber}
          onChange={handleChange}
        ></InputText>
      </div>
      <div className={CheckoutBodyStyle.inputStyle}>
        <p style={{ marginBottom: "3px" }}> গোপন নাম্বার </p>
        <InputPassword
          id="secretKey"
          placeholder={"গোপন নাম্বার"}
          value={secretKey}
          onChange={handleChange}
        ></InputPassword>
      </div>
    </div>
  );
};

export default CheckoutCardPayment;
