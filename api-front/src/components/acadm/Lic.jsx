import Nav from "../global/Nav"
import CardLic from "./lyt_acadm/CardLic"
import HeaderAcd from "./lyt_acadm/HeaderAcd"
function Lic() {

    return(
        <div>
            <header>
            <Nav/>
            <HeaderAcd/>
            </header>
        <section>
        <CardLic/>
        </section>
        </div>
    )
}

export default Lic