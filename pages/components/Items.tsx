import React, { createContext, useContext, useState } from "react";
import { Row, Col } from "antd";
import ItemCard from "./ItemCard";

const Items = () => {
  return (
    <div style={{ marginTop: "25px" }}>
      <Row gutter={[16, 16]}>
        {/* <Col span={2}></Col> */}
        <Col span={3} offset={3}>
          <ItemCard />
        </Col>
        <Col span={3}>
          <ItemCard />
        </Col>
        <Col span={3}>
          <ItemCard />
        </Col>
        <Col span={3}>
          <ItemCard />
        </Col>
        <Col span={3}>
          <ItemCard />
        </Col>
        <Col span={3}>
          <ItemCard />
        </Col>
        {/* <Col span={2}></Col> */}
      </Row>
    </div>
  );
};

export default Items;
