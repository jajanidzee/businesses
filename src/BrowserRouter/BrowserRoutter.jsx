import React from "react";

import Home from "../Pages/Home/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "../Pages/About/About";

const BrowserRoutter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BrowserRoutter;
