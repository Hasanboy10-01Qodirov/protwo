import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route /> */}
      {/* <Route /> */}
      {/* <Route /> */}
      {/* <Route /> */}
    </Routes>
  );
};

export default Router;
