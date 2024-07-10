import React from "react";
import { Routes, Route } from "react-router-dom";
import Ind from "./components/index/Index";
import Lic from "./components/acadm/Lic";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Ind />} />
        <Route path="/Licenciaturas" element={<Lic />} />
      </Routes>
  );
}

export default App;
