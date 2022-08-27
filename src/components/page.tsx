import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

interface PageProps {
  title: string;
  children: any;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/logo/logotitle.png"></link>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
