import Nav from "../global/Nav";
import HeaderMtr from "./lyt_acadm/mtr_acadm/HeaderMtr";
import CardMtr from "./lyt_acadm/mtr_acadm/CardMtr";
import Footer from "../global/Footer";
function Mtr (){

    return(
        <div>
            <header>
            <Nav/>
            <HeaderMtr/>
            </header>
            <section>
              <CardMtr/>  
            </section>
            <br />
            <br />
            <Footer/>
        </div>
    )
}

export default Mtr