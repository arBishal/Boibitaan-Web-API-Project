import { useState } from "react";
import Modal from "../../ui-base-components/Modal";
import { useRouter } from "next/router";


//@ts-ignore
export default function CheckoutModal({ setOpen, open }) {
  const router = useRouter();
  const handleClick = () => {
    setOpen(false);
    router.push("/")
  };

  return (
    <Modal
      visible={open}
      title="অর্ডার সফল হয়েছে!"
      onCancel={handleClick}
      footer={[
      ]}
    >
      <div>অর্ডারটি হাতে পাবার জন্য দয়া করে ৫-৭ কার্যদিবস পর্যন্ত অপেক্ষা করুন। আমাদের সাথেই থাকুন। ধন্যবাদ।</div>
    </Modal>
  );
}