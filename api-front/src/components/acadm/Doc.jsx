import React, { useEffect } from 'react';
import Nav from "../global/Nav";
import HeaderDoc from "./lyt_acadm/doc_acadm/HeaderDoc";
import CardDoc from "./lyt_acadm/doc_acadm/CardDoc";
import Footer from "../global/Footer";

function Doc() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div>
            <header>
                <Nav/>
                <HeaderDoc/>
            </header>
            <section>
                <CardDoc/>
            </section>
            <br />
            <br />
            <Footer/>
        </div>
    )
}

export default Doc;