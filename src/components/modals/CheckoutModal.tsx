import { Alert } from "antd";
import { useState } from "react";
import Button from "../../ui-base-components/Button";
import InputText from "../../ui-base-components/InputText";
import Modal from "../../ui-base-components/Modal";

//@ts-ignore
export default function CheckoutModal({ setOpen, open }) {

  const successPrompt = () => {
    setOpen(false);
  };

  return (
    <Modal
      visible={open}
      title=""
      onCancel={setOpen(false)}
      footer={[
        <Button key="cancelButton" theme="dark" onClick={successPrompt}>
          ঠিক আছে
        </Button>
      ]}
    >
      <div>আপনার অর্ডারটি সফল হয়েছে। দয়া করে ৫-৭ কার্যদিবস পর্যন্ত অপেক্ষা করুন। সাথে থাকার জন্য ধন্যবাদ!</div>
    </Modal>
  );
}
