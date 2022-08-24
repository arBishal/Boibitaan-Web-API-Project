import { useState } from "react";
import Button from "../../ui-base-components/Button";
import InputText from "../../ui-base-components/InputText";
import Modal from "../../ui-base-components/Modal";

import BuyBookModalStyle from "./buyBookModal.module.css";

//@ts-ignore
export default function BuyBookModal({ setOpen, open }) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const handleAddBook = () => {
    setOpen(false);
  };

  const handlePayment = () => {
    setOpen(false);
  };

  return loggedIn ? (
    <Modal
      visible={open}
      title="বইটি কিনুন"
      onCancel={handlePayment}
      footer={[
        <Button key="cancelButton" theme="dark" onClick={handlePayment}>
          কার্টে যুক্ত করুন
        </Button>,
        <Button
          key="AddBookButton"
          theme="dark"
          onClick={handleAddBook}
          style={{ marginRight: "7px", marginLeft: "10px" }}
        >
          বিস্তারিত দেখুন
        </Button>,
      ]}
    >
      <div>আপনি এখন এই বইটি কিনছেন</div>
    </Modal>
  ) : (
    <Modal
      visible={open}
      title="বইটি কিনুন"
      onCancel={handlePayment}
      footer={[
        <Button
          key="cancelButton"
          theme="dark"
          onClick={handlePayment}
          disabled
        >
          কার্টে যুক্ত করুন
        </Button>,
        <Button
          key="AddBookButton"
          theme="dark"
          onClick={handleAddBook}
          style={{ marginRight: "7px", marginLeft: "10px" }}
          disabled
        >
          বিস্তারিত দেখুন
        </Button>,
      ]}
    >
      <p>বইটি কিনতে চাইলে সাইন আপ / লগ ইন করুন।</p>
    </Modal>
  );
}
