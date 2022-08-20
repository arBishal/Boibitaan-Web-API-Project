import React, { useState } from "react";
import Button from "../ui-base-components/Button";
import Image from "next/image";
import CartItemCardStyle from "./cartItemCard.module.css";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import Counter from "../ui-base-components/Counter";

const CartItemCard = ({ image, name, author, price }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className={CartItemCardStyle.cartItem}>
      <div className={CartItemCardStyle.itemImage}>
        <Image
          src={image}
          alt="item1"
          height="135vh"
          width="90vh"
          style={{ borderRadius: "10px 0px 0px 10px" }}
        />
      </div>
      <div className={CartItemCardStyle.itemInfo}>
        <p className={CartItemCardStyle.infoText}>নাম: {name}</p>
        <p className={CartItemCardStyle.infoText}>লেখক: {author}</p>
        <p className={CartItemCardStyle.infoText}>মূল্য: {price}৳</p>
      </div>
      <div className={CartItemCardStyle.itemCounter}>
        <Counter></Counter>
      </div>
      <div className={CartItemCardStyle.itemRemove}>
        <Button
          theme="remove"
          style={{ marginTop: "5px", marginBottom: "10px" }}
          onClick={handleClick}
        >
          <DeleteOutlined />
        </Button>
      </div>
    </div>
  );
};

export default CartItemCard;
