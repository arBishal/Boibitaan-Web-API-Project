import React, { useState } from "react";
import CheckoutBodyStyle from "./checkoutBody.module.css";
import InputText from "../ui-base-components/InputText";
import InputTextArea from "../ui-base-components/InputTextArea";
import { ClientInfo, PurchaceRequest } from "../../lib/types";

const CheckoutCardInfo = ({
  clientInfo,
  setPurchaceRequest,
}: {
  clientInfo: ClientInfo;
  setPurchaceRequest: React.Dispatch<
    React.SetStateAction<PurchaceRequest | undefined>
  >;
}) => {
  const { name, phone, address } = clientInfo;

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
          {" "}
          ডেলিভারি সংক্রান্ত তথ্যাবলি{" "}
        </p>
      </div>
      <div className={CheckoutBodyStyle.inputStyle}>
        <p style={{ marginBottom: "3px" }}> পূর্ণ নাম </p>
        <InputText
          id="name"
          onChange={handleChange}
          placeholder={"পূর্ণ নাম"}
          value={name}
        ></InputText>
      </div>
      <div className={CheckoutBodyStyle.inputStyle}>
        <p style={{ marginBottom: "3px" }}> ফোন নাম্বার </p>
        <InputText
          id="phone"
          onChange={handleChange}
          placeholder={"ফোন নাম্বার"}
          value={phone}
        ></InputText>
      </div>
      <div className={CheckoutBodyStyle.inputStyle}>
        <p style={{ marginBottom: "3px" }}> পূর্ণ ঠিকানা </p>
        <InputTextArea
          id="address"
          onChange={handleChange}
          placeholder={"পূর্ণ ঠিকানা"}
          autoSize={{ minRows: 3, maxRows: 6 }}
          value={address}
        ></InputTextArea>
      </div>
    </div>
  );
};

export default CheckoutCardInfo;
