import React, { useState } from "react";
import Button from "../src/ui-custom-components/Button";
import Image from "next/image";
import ItemImage from "../../public/item/item1.png";
import ItemCardStyle from "./itemCard.module.css";

const ItemCard = () => {
  return (
    <div>
      <div className={ItemCardStyle.itemImage}>
        <Image src={ItemImage} alt="item1" height="135vh" width="90vh" />
      </div>
      <div className={ItemCardStyle.itemInfo}>
        <p className={ItemCardStyle.infoText}>নাম: কবিতাসমগ্র</p>
        <p className={ItemCardStyle.infoText}>লেখক: জীবনানন্দ দাশ</p>
        <p className={ItemCardStyle.infoText}>মূল্য: ৩৭৫৳</p>
        <Button theme="dark" />
      </div>
    </div>
  );
};

export default ItemCard;
