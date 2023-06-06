import React, { useState } from "react";
import Button from "../ui-base-components/Button";
import Image from "next/image";
import ItemCardStyle from "./itemCard.module.css";
import { useRouter } from "next/router";
import { Book } from "../../lib/types";
import Loading from "./Loading";
import authStyle from "../../styles/auth.module.css";

const ItemCard = ({ id, image, name, author, price }: Partial<Book>) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // if (loading) {
  //   return (
  //     <div className={authStyle.authPage}>
  //       <Loading />
  //     </div>
  //   );
  // }
  return loading ? (
    <div>
      <div
        className={ItemCardStyle.item}
        onClick={() => {
          setLoading(true);
          router.push(`/product/${id}`);
        }}
      >
        <div className={ItemCardStyle.itemLoader}>
          <Loading/>
        </div>
        <div className={ItemCardStyle.itemInfo}>
          <p className={ItemCardStyle.infoText} style={{ fontWeight: "bold" }}>
            {name}
          </p>
          <p className={ItemCardStyle.infoText}>{author}</p>
          <p className={ItemCardStyle.infoText} style={{ marginBottom: "5px" }}>
            {price + "৳"}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={ItemCardStyle.item}
      onClick={() => {
        setLoading(true);
        router.push(`/product/${id}`);
      }}
    >
      <div className={ItemCardStyle.itemImage}>
        <Image src={image} alt="item" height="135vh" width="90vh" />
      </div>
      <div className={ItemCardStyle.itemInfo}>
        <p className={ItemCardStyle.infoText} style={{ fontWeight: "bold" }}>
          {name}
        </p>
        <p className={ItemCardStyle.infoText}>{author}</p>
        <p className={ItemCardStyle.infoText} style={{ marginBottom: "5px" }}>
          {price + "৳"}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
