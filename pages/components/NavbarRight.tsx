import React, { useState } from "react";
import Button from "../src/ui-custom-components/Button";
import {
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import iconStyle from "./icon.module.css";
import navStyle from "./navbar.module.css";

const NavbarRight = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return loggedIn ? (
    <div className={navStyle.navbarRight}>
      <ShoppingCartOutlined className={iconStyle.icon} />
      <UserOutlined className={iconStyle.icon} />
      <LogoutOutlined className={iconStyle.icon} />
    </div>
  ) : (
    <div className={navStyle.navbarRight}>
      <Button theme="invisible"> লগ ইন </Button>
      <Button theme="invisible"> সাইন আপ </Button>
    </div>
  );
};

export default NavbarRight;
