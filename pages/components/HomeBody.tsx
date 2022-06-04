import React, { createContext, useContext, useState } from "react";
import { Row, Col } from "antd";
import bodyStyle from "./homeBody.module.css";
import ItemCard from "./ItemCard";

function HomeBody() {
  return (
    <div className={bodyStyle.homeBody}>
      <div className={bodyStyle.sectionHeader}>
        <h4 style={{ fontSize: "20px", margin: "0px" }}>
          সর্বাধিক বিক্রিত বইসমূহ
        </h4>
        <div>
          <ItemCard />
        </div>
      </div>
      <div className={bodyStyle.sectionHeader}>
        <h4 style={{ fontSize: "20px", margin: "0px" }}>আমাদের সকল বইসমূহ</h4>
      </div>
    </div>
  );
}

export default HomeBody;
