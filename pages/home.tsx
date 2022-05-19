import React, { createContext, useContext, useState } from "react";
import HomeBody from "./components/HomeBody";
import Page from "./components/page";

function Home() {
  return (
    <Page title="বইবিতান">
      <HomeBody />
    </Page>
  );
}

export default Home;
