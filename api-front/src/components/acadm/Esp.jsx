import React, { useEffect } from 'react';
import Nav from "../global/Nav";
import HeaderEsp from "./lyt_acadm/esp_acadm/HeaderEsp";
import CardEsp from "./lyt_acadm/esp_acadm/CardEsp";
import Footer from "../global/Footer";

function Esp(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div>
            <header>
                <Nav/>
            <HeaderEsp/>
            </header>
            <section>
            <CardEsp/>
            </section>
            <br />
            <br />
        <Footer/>
        </div>
    )
}

export default Esp;

