import React from "react";
import Header from "../header/Header";
import Router from "../../router/Router";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
};

export default Layout;
