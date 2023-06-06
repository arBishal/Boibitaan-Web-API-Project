import { useState } from "react";
import Modal from "../../ui-base-components/Modal";
import { useRouter } from "next/router";


//@ts-ignore
export default function CheckoutModal({ setOpen, open, title, text }) {
  const router = useRouter();
  const handleClick = () => {
    setOpen(false);
    // router.push("/")
  };

  return (
    <Modal
      visible={open}
      title={title}
      onCancel={handleClick}
      footer={[
      ]}
    >
      <div>{text}</div>
    </Modal>
  );
}