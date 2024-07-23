import React from "react";
import { Routes, Route } from "react-router-dom";
import Ind from "./components/index/Index";
import Mtr from "./components/acadm/Mtr";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Ind />} />
        <Route path="/Maestrias" element={<Mtr />} />
      </Routes>
  );
}

export default App;
