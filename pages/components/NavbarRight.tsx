import React, { useState } from "react";
import Button from "../src/ui-custom-components/Button";
import {
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import iconStyle from "./icon.module.css";
import navStyle from "./navbar.module.css";
import { useRouter } from "next/router";

const NavbarRight = () => {
  const router = useRouter();

  const [loggedIn, setLoggedIn] = useState(true);
  return loggedIn ? (
    <div className={navStyle.navbarRight}>
      <ShoppingCartOutlined className={iconStyle.icon} />
      <UserOutlined className={iconStyle.icon} onClick={()=> router.push("/profile")}/>
      <LogoutOutlined className={iconStyle.icon} />
    </div>
  ) : (
    <div className={navStyle.navbarRight}>
      <Button theme="invisible" onClick={() => router.push("/logIn")}>
        {" "}
        লগ ইন{" "}
      </Button>
      <Button theme="invisible" onClick={() => router.push("/signUp")}>
        {" "}
        সাইন আপ{" "}
      </Button>
    </div>
  );
};

export default NavbarRight;
