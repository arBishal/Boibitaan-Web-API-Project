import { Alert } from "antd";
import { useState } from "react";
import Button from "../../ui-base-components/Button";
import InputText from "../../ui-base-components/InputText";
import Modal from "../../ui-base-components/Modal";

//@ts-ignore
export default function SetupModal({ open, setOpen }) {

  const handleClick = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(true);
  }
  return (
    <Modal
      visible={open}
      title="লেনদেন বিষয়ক তথ্যাবলি"
      onCancel={handleCancel}
      footer={[
        <Button key="cancelButton" theme="dark" onClick={handleClick} style={{ marginRight: "7px"}}>
          নিশ্চিত করুন
        </Button>
      ]}
    >
      <div>
        <p>
          দয়া করে আপনার ব্যাংক অ্যাকাউন্ট নাম্বারটি দিন এবং লেনদেনের জন্য একটি গোপন নাম্বার সেট করুন। ধন্যবাদ।
        </p>
      </div>
      <div>
      <p style={{ marginBottom: "3px" }}> ব্যাংক অ্যাকাউন্ট </p>
          <InputText placeholder="ব্যাংক অ্যাকাউন্ট"></InputText>
      </div>
      <div>
      <p style={{ marginBottom: "3px", marginTop: "5px" }}> গোপন নাম্বার </p>
          <InputText placeholder="গোপন নাম্বার"></InputText>
      </div>
    </Modal>
  );
}
