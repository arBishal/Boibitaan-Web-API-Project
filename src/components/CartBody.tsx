import React, { createContext, useContext, useEffect, useState } from "react";

import { Row, Col } from "antd";
import CartBodyStyle from "./cartBody.module.css";
import { Cart } from "../../lib/types";

import Button from "../ui-base-components/Button";
import CartItemCard from "./CartItemCard";

function CartBody() {
  const [cart, setCart] = useState<string>();

  useEffect(() => {
    setCart(localStorage.getItem("cart")?.toString());
  }, []);

  const noBook = (
    <div className={CartBodyStyle.cartBody}>
      <Row>
        <Col span={8} offset={8}>
          <p className={CartBodyStyle.cartText}>
            আপনার কার্টে কোন বই নেই। <br /> অর্ডার করার জন্য কার্টে বই যুক্ত
            করুন। <br /> ধন্যবাদ।
          </p>
        </Col>
      </Row>
    </div>
  );

  if (!cart) {
    return noBook;
  }
  const cartItems: Cart = JSON.parse(cart);
  let bookList: (string | number)[] = Object.keys(cartItems);

  if (!bookList.length) {
    return noBook;
  }

  return (
    <div className={CartBodyStyle.cartBody}>
      <div style={{ marginTop: "25px" }}>
        {bookList.map((id, index) => {
          const { amount, book } = cartItems[id];
          return (
            <Row id={index.toString()}>
              <Col span={8} offset={8}>
                <div className={CartBodyStyle.cartCard}>
                  <CartItemCard
                    image={book.image}
                    name={book.name}
                    author={book.author}
                    price={book.price}
                  />
                </div>
              </Col>
            </Row>
          );
        })}
        <Row>
          <Col span={2} offset={11}>
            <Button theme="dark" style={{ marginTop: "20px" }}>
              {" "}
              অর্ডার করুন{" "}
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CartBody;
