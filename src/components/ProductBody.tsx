import React from "react";
import { Row, Col } from "antd";
import ProductBodyStyle from "./productBody.module.css";
import ProductCard from "./ProductCard";
import Item1 from "../../public/item/item1.png";
import Button from "../ui-base-components/Button";

function ProductBody() {
  return (
    <div className={ProductBodyStyle.productBody}>
      <Row>
        <Col span={8} offset={8}>
          <div className={ProductBodyStyle.productCard}>
            <ProductCard
            image={Item1}
            name="কবিতাসমগ্র"
            author="জীবনানন্দ দাশ"
            price="৩৭৫"
            publisher="আনন্দ"
            supplier="বিবিধ"
            quantity="৫"
            catagory="মৌলিক"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8}>
            <div className={ProductBodyStyle.productDescription}>
                <p style={{fontWeight: "bold", marginBottom: "5px"}}>
                    বিস্তারিত:
                </p>
                <p>
                "এটি একটি কবিতার বই। জীবনান্দ দাশের লেখা সকল কবিতা এই একটি বইয়ে সংকলিত হয়েছে।"
                </p>
            </div>
        </Col>
      </Row>
      <Row>
        <Col span={2} offset={11}>
        <Button theme="dark" style={{marginTop: "20px"}}> কার্টে যুক্ত করুন </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ProductBody;