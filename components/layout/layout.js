import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
