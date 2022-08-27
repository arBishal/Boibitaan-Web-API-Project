import React, { useState } from "react";
import Button from "../ui-base-components/Button";
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined";
import PlusCircleOutlined from "@ant-design/icons/lib/icons/PlusCircleOutlined";
import { Cart } from "../../lib/types";

type CounterProps = {
  id: number;
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
};

const Counter = ({ id, cart, setCart }: CounterProps) => {
  const increase = () => {
    setCart((prevCart) => {
      const newCart = JSON.parse(JSON.stringify(prevCart));
      newCart[id].amount++;
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const decrease = () => {
    if (cart[id].amount > 1) {
      setCart((prevCart) => {
        const newCart = JSON.parse(JSON.stringify(prevCart));
        newCart[id].amount--;
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      });
    }
  };

  return (
    <div>
      <Button
        theme="counter"
        //   style={{ marginLeft: "5px", marginRight: "5px" }}
        onClick={decrease}
      >
        <MinusCircleOutlined />
      </Button>
      {cart[id].amount}
      <Button
        theme="counter"
        //   style={{ marginLeft: "5px", marginRight: "5px" }}
        onClick={increase}
      >
        <PlusCircleOutlined />
      </Button>
    </div>
  );
};

export default Counter;
