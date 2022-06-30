import React, { createContext, useContext, useState } from "react";
import { Row, Col } from "antd";
import ItemCard from "./ItemCard";
import Item1 from "../../public/item/item1.png";
import Item2 from "../../public/item/item2.png";
import Item3 from "../../public/item/item3.png";
import Item4 from "../../public/item/item4.png";
import Item5 from "../../public/item/item5.png";
import Item6 from "../../public/item/item6.png";

const Items = () => {
  return (
    <div style={{ marginTop: "25px" }}>
      <Row gutter={[16, 16]}>
        <Col span={3} offset={3}>
          <ItemCard
            image={Item1}
            name="কবিতাসমগ্র"
            author="জীবনানন্দ দাশ"
            price="৩৭৫"
          />
        </Col>
        <Col span={3}>
          <ItemCard
            image={Item2}
            name="চৈনিক পুরাণ"
            author="সাব্বির হোসেন"
            price="১৮০"
          />
        </Col>
        <Col span={3}>
          <ItemCard
            image={Item3}
            name="মাস্টার জ্যাকারিয়াস"
            author="জুল ভার্ন"
            price="১২০"
          />
        </Col>
        <Col span={3}>
          <ItemCard
            image={Item4}
            name="দ্য স্ট্যান্ড"
            author="স্টিফেন কিং"
            price="৮০০"
          />
        </Col>
        <Col span={3}>
          <ItemCard
            image={Item5}
            name="১৯৮৪"
            author="জর্জ অরওয়েল"
            price="১৫০"
          />
        </Col>
        <Col span={3}>
          <ItemCard
            image={Item6}
            name="দ্য বাটারফ্লাই গার্ডেন"
            author="ডট হাচিসন"
            price="২৫০"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Items;
