import React from "react";
import { Routes, Route } from "react-router-dom";
import Ind from "./components/index/Index";
import Lic from "./components/acadm/Lic";
import Doc from "./components/acadm/Doc";
import Mtr from "./components/acadm/Mtr"
import Esp from "./components/acadm/Esp";
import Contact from "./components/contact/Contact";
import Desa from "./components/desa/Desa";
import InfoLic from "./components/infacad/lic/InfoLic";

function App() {
  return (
      <Routes>

        <Route path="/" element={<Ind />} />
        <Route path="/Licenciaturas" element={<Lic />} />
        <Route path="/Maestrias" element={<Mtr />} />
        <Route path="/Doctorados" element={<Doc />} />
        <Route path="/Especialidades" element={<Esp />} />
        <Route path="/Contacto" element={<Contact />} />
        <Route path="/Desa" element={<Desa/>}/>

        {/*Informacion academica licenciatura*/}
        <Route  path="/Pedagogia" element={<InfoLic/>} />
      </Routes>
  );
}

export default App;
