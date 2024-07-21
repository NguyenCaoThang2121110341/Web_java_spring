import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </main>
);
export default Main;
