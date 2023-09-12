import React from "react";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Questions from "./pages/questions/Questions";
import AskQuestion from "./pages/askQuestion/AskQuestion";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
    </Routes>
  );
};

export default AllRoutes;
