import { Alert } from "antd";
import { useState } from "react";
import Button from "../../ui-base-components/Button";
import InputText from "../../ui-base-components/InputText";
import Modal from "../../ui-base-components/Modal";

//@ts-ignore
export default function SetupModal({ open, setOpen }) {

  const successPrompt = () => {
    setOpen(false);
  };

  return (
    <Modal
      visible={open}
      title="লেনদেন বিষয়ক তথ্যাবলি"
      onCancel={setOpen(false)}
      footer={[
        <Button key="cancelButton" theme="dark" onClick={successPrompt}>
          নিশ্চিত করুন
        </Button>
      ]}
    >
      <div>
      <p style={{ marginBottom: "3px" }}> ব্যাংক অ্যাকাউন্ট </p>
          <InputText placeholder="ব্যাংক অ্যাকাউন্ট"></InputText>
      </div>
      <div>
      <p style={{ marginBottom: "3px" }}> গোপন নাম্বার </p>
          <InputText placeholder="গোপন নাম্বার"></InputText>
      </div>
    </Modal>
  );
}
