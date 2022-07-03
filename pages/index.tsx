import React, { createContext, useContext, useState } from "react";
import HomeBody from "../src/components/HomeBody";
import Page from "../src/components/page";

function Home() {
  return (
    <Page title="বইবিতান">
      <HomeBody />
    </Page>
  );
}
Home.auth = false;
export default Home;
