import Router from "next/router";

export const logOut = () => {
  localStorage.removeItem("token");
  Router.push("/");
};
