import React, { useState } from "react";
import Button from "../ui-base-components/Button";
import Image from "next/image";
import ProductCardStyle from "./productCard.module.css";
import Rating from "../ui-base-components/Rating";

const ProductCard = ({ image, name, author, price, publisher, supplier, quantity, catagory  }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className={ProductCardStyle.productCard}>
      <div className={ProductCardStyle.cardImage}>
        <Image
          src={image}
          alt="item1"
          height="270vh"
          width="180vh"
          style={{ borderRadius: "10px 0px 0px 10px" }}
        />
      </div>
      <div className={ProductCardStyle.cardInfo}>
        <p className={ProductCardStyle.infoTextLarge}>{name}</p>
        <p className={ProductCardStyle.infoText}>লেখক: {author}</p>
        <p className={ProductCardStyle.infoText}>প্রকাশক: {publisher}</p>
        <p className={ProductCardStyle.infoText}>সরবরাহকারী: {supplier}</p>
        <p className={ProductCardStyle.infoText}>মূল্য: {price}৳</p>
        <p className={ProductCardStyle.infoText}>ধরন: {catagory}</p>
        <p className={ProductCardStyle.infoText}>অবশিষ্ট আছে: {quantity} কপি</p>
        <Rating></Rating>
      </div>
    </div>
  );
};

export default ProductCard;
