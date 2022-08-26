import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import CheckoutBodyStyle from "./checkoutBody.module.css";
import CheckoutCardInfo from "./CheckoutCardInfo";
import CheckoutCardPayment from "./CheckoutCardPayment";
import Button from "../ui-base-components/Button";
import CheckoutModal from "./modals/CheckoutModal";

function CheckoutBody() {
    const [open, setOpen] = useState<boolean>(false);
    const handleClick = () => {
      setOpen(true);
    };

  return (
    <div className={CheckoutBodyStyle.checkoutBody}>
      <Row>
        <Col span={8} offset={8}>
          <CheckoutCardInfo></CheckoutCardInfo>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8}>
          <div className={CheckoutBodyStyle.checkoutColumn}>
            <CheckoutCardPayment></CheckoutCardPayment>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={4} offset={11}>
        <Button
          theme="dark"
          style={{ marginTop: "20px" }}
          onClick={handleClick}
        >
          {" "}
          সম্পন্ন করুন{" "}
        </Button>
        </Col>
        <CheckoutModal setOpen={setOpen} open={open} title="অর্ডার সফল হয়েছে!" text="অর্ডারটি হাতে পাবার জন্য দয়া করে ৫-৭ কার্যদিবস পর্যন্ত অপেক্ষা করুন। আমাদের সাথেই থাকুন। ধন্যবাদ।"></CheckoutModal>
      </Row>
    </div>
  );
}

export default CheckoutBody;