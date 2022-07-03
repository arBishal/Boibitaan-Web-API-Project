import React, { useState } from "react";
import Button from "../ui-base-components/Button";
import Image from "next/image";
import ItemCardStyle from "./itemCard.module.css";
import BuyBookModal from "./BuyBookModal";

const ItemCard = ({ image, name, author, price }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className={ItemCardStyle.itemImage}>
        <Image src={image} alt="item1" height="135vh" width="90vh" />
      </div>
      <div className={ItemCardStyle.itemInfo}>
        <p className={ItemCardStyle.infoText}>নাম: {name}</p>
        <p className={ItemCardStyle.infoText}>লেখক: {author}</p>
        <p className={ItemCardStyle.infoText}>মূল্য: {price}৳</p>
        <Button
          theme="dark"
          style={{ marginTop: "5px", marginBottom: "10px" }}
          onClick={handleClick}
        >
          কিনুন
        </Button>
        <BuyBookModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default ItemCard;
