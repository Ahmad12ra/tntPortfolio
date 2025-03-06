import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./components/home_page/js/home";
import ErrorPage from "./components/error_page/js/error";
import LongsComp from "./components/longs/js/longs";
import ShortsComp from "./components/shorts/js/shorts";
import PricesComp from "./components/prices/js/prices";
import { useEffect, useState, useRef } from "react";
import "./css/all.css";
import "./app.css";

function App() {

  console.log()
  
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/longs" element={<LongsComp />} />
          <Route path="/shorts" element={<ShortsComp />} />
          <Route path="/prices" element={<PricesComp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
