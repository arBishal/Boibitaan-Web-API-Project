import React, { useState } from "react";
import Button from "../ui-base-components/Button";
import Image from "next/image";
import CartItemCardStyle from "./cartItemCard.module.css";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import Counter from "../ui-base-components/Counter";
import { Book, Cart } from "../../lib/types";

const CartItemCard = ({
  id,
  image,
  name,
  author,
  price,
  cart,
  setCart,
}: {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
} & Partial<Book>) => {
  const [counter, setCounter] = useState<number>(1);
  return (
    <div className={CartItemCardStyle.cartItem}>
      <div className={CartItemCardStyle.cartLeft}>
        <div className={CartItemCardStyle.itemImage}>
          <Image
            // @ts-ignore
            src={process.env.NEXT_PUBLIC_FIREBASE_STORAGE_PREFIX + image}
            alt="item1"
            height="135vh"
            width="90vh"
            style={{ borderRadius: "10px 0px 0px 10px" }}
          />
        </div>
        <div className={CartItemCardStyle.itemInfo}>
          <p className={CartItemCardStyle.infoText}>নাম: {name}</p>
          <p className={CartItemCardStyle.infoText}>লেখক: {author}</p>
          <p className={CartItemCardStyle.infoText}>মূল্য: {price}</p>
        </div>
      </div>
      <div className={CartItemCardStyle.cartRight}>
        <div>
          <Counter id={id} cart={cart} setCart={setCart} />
        </div>
        <div style={{ marginRight: "10px" }}>
          <Button
            lock
            onClick={() => {
              setCart((prevCart) => {
                const newCart = JSON.parse(JSON.stringify(prevCart));
                newCart[id].amount = 0;
                localStorage.setItem("cart", JSON.stringify(newCart));
                return newCart;
              });
            }}
            theme="remove"
            style={{ marginTop: "5px", marginBottom: "10px" }}
          >
            <DeleteOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
