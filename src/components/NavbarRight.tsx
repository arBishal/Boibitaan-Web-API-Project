import React, { useState } from "react";
import Button from "../ui-base-components/Button";
import {
  UserOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import iconStyle from "./icon.module.css";
import navStyle from "./navbar.module.css";
import { useRouter } from "next/router";
import { logOut } from "../../lib/auth-functionality";
import { useSession } from "next-auth/react";

const NavbarRight = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return (
      <div className={navStyle.navbarRight}>
        <h3>Loading...</h3>
      </div>
    );
  }
  return status === "unauthenticated" ? (
    <div className={navStyle.navbarRight}>
      <Button theme="invisible" onClick={() => router.push("/auth/signin")}>
        {" "}
        লগ ইন{" "}
      </Button>
      <Button theme="invisible" onClick={() => router.push("/auth/signup")}>
        {" "}
        সাইন আপ{" "}
      </Button>
    </div>
  ) : (
    <div className={navStyle.navbarRight}>
      <ShoppingCartOutlined
        className={iconStyle.icon}
        onClick={() => router.push("/cart")}
      />
      <UserOutlined
        className={iconStyle.icon}
        onClick={() => router.push("/profile")}
      />
      <LogoutOutlined className={iconStyle.icon} onClick={logOut} />
    </div>
  );
};

export default NavbarRight;
