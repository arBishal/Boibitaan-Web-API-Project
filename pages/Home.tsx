import React, { createContext, useContext, useState } from "react";
import Navbar from "./components/Navbar";
import HomeBody from "./components/HomeBody";
import Footer from "./components/Footer";

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <HomeBody></HomeBody>
      <Footer></Footer>
    </div>
  );
}

export default Home;
