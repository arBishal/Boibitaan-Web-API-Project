import { useState } from "react";
import { Row, Col } from "antd";
import ProductBodyStyle from "./productBody.module.css";
import ProductCard from "./ProductCard";
import Button from "../ui-base-components/Button";
import { Book } from "../../lib/types";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { success } from "../ui-base-components/Modal";

function ProductBody({ book }: { book: Book }) {
  const { status } = useSession();
  const [open, setOpen] = useState<boolean>(false);

  const onClickHandler = () => {
    if (status === "authenticated") {
      const cart = localStorage.getItem("cart");
      if (!cart) {
        localStorage.setItem(
          "cart",
          JSON.stringify({ [book.id]: { amount: 1, book } })
        );
      } else {
        const cartObject = JSON.parse(cart);
        if (!cartObject[book.id]) {
          cartObject[book.id] = { amount: 1, book };
        } else {
          cartObject[book.id].amount++;
        }
        localStorage.setItem("cart", JSON.stringify(cartObject));
      }
      setOpen(true);
    } else if (status === "unauthenticated") {
      Router.push("/auth/signin");
    } else {
      alert("Please Try Again! :(");
    }
  };
  return (
    <div className={ProductBodyStyle.productBody}>
      <Row>
        <Col span={8} offset={8}>
          <div className={ProductBodyStyle.productCard}>
            <ProductCard
              image={
                process.env.NEXT_PUBLIC_FIREBASE_STORAGE_PREFIX + book.image
              }
              name={book.name}
              author={book.author}
              price={book.price}
              publisher={book.publisher}
              supplier={book.supplier}
              quantity={book.quantity}
              catagory={book.catagory}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8}>
          <div className={ProductBodyStyle.productDescription}>
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>
              বিস্তারিত:
            </p>
            <p>{book.description}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={2} offset={11}>
          <Button
            theme="dark"
            onClick={()=>success('দারুণ!', 'বইটি কার্টে যুক্ত করা হয়েছে।')}
            style={{ marginTop: "20px" }}
          >
            {" "}
            কার্টে যুক্ত করুন{" "}
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ProductBody;
