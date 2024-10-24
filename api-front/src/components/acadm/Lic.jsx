import React, { useEffect } from 'react';
import Nav from "../global/Nav";
import CardLic from "./lyt_acadm/lic_acadm/CardLic";
import HeaderLic from "./lyt_acadm/lic_acadm/HeaderLic";
import Footer from "../global/Footer";
function Lic() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    useEffect(() =>{
      document.title = 'Licenciaturas | Universidad INNOVA';
    },[]);

  return (
    <div>
      <header>
        <Nav />
        <HeaderLic />
      </header>
      <section>
        <CardLic />
      </section>
      <br/>
      <br />
      <Footer />
    </div>
  );
}

export default Lic;
