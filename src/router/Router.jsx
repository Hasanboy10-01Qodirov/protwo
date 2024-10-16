import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../components/ui/contact/Contact";
import Jobs from "../pages/Jobs";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/jobs" element={<Jobs />} />
      {/* <Route /> */}
    </Routes>
  );
};

export default Router;
