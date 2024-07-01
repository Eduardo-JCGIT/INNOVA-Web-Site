import Nav from "../global/Nav";
import HeaderInd from "./HeaderInd";
import Infpt1 from "./Infpt1";
import Offerlayout from "./Offerlayout";
import Infpt2 from "./Infpt2";
import Footer from "../global/Footer";

function Ind (){
    return(
    <div>
    <Nav/>
    <HeaderInd/>
    <body>
    <Infpt1/>
    <Offerlayout/>
    <Infpt2/>
    </body>
    <Footer/>
    </div>
    )
};

export default Ind;
