import { useState } from "react";
import Button from "../../ui-base-components/Button";
import Modal from "../../ui-base-components/Modal";

//@ts-ignore
export default function AddToCartModal({ setOpen, open }) {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Modal
      visible={open}
      onCancel={handleClick}
      footer={[
        <Button key="cancelButton" theme="dark" onClick={handleClick} style={{ marginRight: "7px"}}>
          ঠিক আছে
        </Button>
      ]}
    >
      <div>বইটি কার্টে যুক্ত করা হয়েছে।</div>
    </Modal>
  );
}
