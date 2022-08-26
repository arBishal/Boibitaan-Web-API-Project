import { useState } from "react";
import Button from "../../ui-base-components/Button";
import Modal from "../../ui-base-components/Modal";

//@ts-ignore
export default function SignInFailedModal({ setOpen, open }) {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Modal
      visible={open}
      title="দুঃখিত!"
      onCancel={handleClick}
      footer={[
      ]}
    >
      <div>আপনার চেষ্টাটি সফল হয়নি। দয়া করে আবার চেষ্টা করুন।</div>
    </Modal>
  );
}