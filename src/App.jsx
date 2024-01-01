import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import "./App.css";
import Page from "./Pages/LandingPage";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
