import React, { createContext, useContext, useState } from "react";
import bodyStyle from "./homeBody.module.css";

function HomeBody() {
  return (
    <div className={bodyStyle.homeBody}>
      <h4 style={{ fontSize: "24px" }}>হোম!</h4>
    </div>
  );
}

export default HomeBody;
