import React, { useEffect, useState } from "react";
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
import Badge from "../ui-base-components/Badge";
import { Cart } from "../../lib/types";

const ProductCart = () => {
  const router = useRouter();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const updateCount = () => {
      const cart: Cart = JSON.parse(
        (localStorage.getItem("cart") as string) || "{}"
      );
      const products = Object.keys(cart);
      const totalItem: number = Number(
        products.reduce((total, id) => {
          return Number(total) + (cart[id].amount ? 1 : 0);
        }, 0)
      );
      if (count !== totalItem) setCount(totalItem);
    };
    const intervalId = setInterval(updateCount, 1500);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Badge count={count}>
      <ShoppingCartOutlined
        className={iconStyle.icon}
        onClick={() => {
          router.push("/cart");
        }}
      />
    </Badge>
  );
};

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
      <ProductCart />
      <UserOutlined
        className={iconStyle.icon}
        onClick={() => router.push("/profile")}
      />
      <LogoutOutlined className={iconStyle.icon} onClick={logOut} />
    </div>
  );
};

export default NavbarRight;
