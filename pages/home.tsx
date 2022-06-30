import React, { createContext, useContext, useState } from "react";
import HomeBody from "./components/HomeBody";
import Page from "./components/page";
import { getToken } from "next-auth/jwt";
import jwt from "jsonwebtoken";

function Home() {
  return (
    <Page title="বইবিতান">
      <HomeBody />
    </Page>
  );
}
Home.auth = true;
export default Home;
