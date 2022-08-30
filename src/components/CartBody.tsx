import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Row, Col } from "antd";
import CartBodyStyle from "./cartBody.module.css";
import { Cart } from "../../lib/types";

import Button from "../ui-base-components/Button";
import CartItemCard from "./CartItemCard";
import Router from "next/router";
import Loading from "./Loading";

function CartBody() {
  const [cart, setCart] = useState<Cart>({});
  const [loading, setLoading] = useState<boolean>(false);

  if (loading) {
    return <Loading />;
  }
  useEffect(() => {
    setCart(
      JSON.parse((localStorage.getItem("cart")?.toString() as string) || `{}`)
    );
  }, []);

  const noBook = useMemo(
    () => (
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
    ),
    []
  );
  const totalBooks = useCallback((cart: Cart) => {
    let bookList: (string | number)[] = Object.keys(cart);
    return Number(
      bookList.reduce((total, id) => {
        return Number(total) + cart[id].amount;
      }, 0)
    );
  }, []);

  if (!cart || totalBooks(cart) === 0) {
    return noBook;
  }

  let bookList: (string | number)[] = Object.keys(cart);

  const totalPrice: number = Number(
    bookList.reduce((total, id) => {
      return Number(total) + cart[id].amount * cart[id].book.price;
    }, 0)
  );

  if (!bookList.length) {
    return noBook;
  }

  return (
    <div className={CartBodyStyle.cartBody}>
      <div style={{ marginTop: "25px" }}>
        {bookList.map((id, index) => {
          const { amount, book } = cart[id];
          if (amount) {
            return (
              <Row id={index.toString()}>
                <Col span={8} offset={8}>
                  <div className={CartBodyStyle.cartCard}>
                    <CartItemCard
                      id={Number(book.id)}
                      image={book.image}
                      name={book.name}
                      author={book.author}
                      price={book.price}
                      cart={cart}
                      setCart={setCart}
                    />
                  </div>
                </Col>
              </Row>
            );
          } else {
            return <></>;
          }
        })}
        <Row>
          <Col span={8} offset={8}>
            <div className={CartBodyStyle.cartAmount}>
              প্রদেয় মোট টাকার পরিমাণ: {totalPrice} ৳
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={11}>
            <Button
              onClick={() => {
                Router.push("/checkout");
              }}
              theme="dark"
              style={{ marginTop: "20px" }}
            >
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
