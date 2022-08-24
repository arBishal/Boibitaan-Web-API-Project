import React from "react";
import { Row, Col } from "antd";
import CartBodyStyle from "./cartBody.module.css";
import CartItemCard from "./CartItemCard";
import Item1 from "../../public/item/item1.png";
import Button from "../ui-base-components/Button";

function CartBody() {
  return (
    <div className={CartBodyStyle.cartBody}>
      <Row>
        <Col span={8} offset={8}>
          <div className={CartBodyStyle.cartCard}>
            <CartItemCard
            image={Item1}
            name="কবিতাসমগ্র"
            author="জীবনানন্দ দাশ"
            price="৩৭৫"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8}>
          <div className={CartBodyStyle.cartCard}>
            <CartItemCard
            image={Item1}
            name="কবিতাসমগ্র"
            author="জীবনানন্দ দাশ দাশ"
            price="৩৭৫"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8}>
          <div className={CartBodyStyle.cartCard}>
            <CartItemCard
            image={Item1}
            name="কবিতাসমগ্র"
            author="জীবনানন্দ দাশ"
            price="৩৭৫"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={2} offset={11}>
        <Button theme="dark" style={{marginTop: "20px"}}> অর্ডার করুন </Button>
        </Col>
      </Row>
    </div>
  );
}

export default CartBody;
