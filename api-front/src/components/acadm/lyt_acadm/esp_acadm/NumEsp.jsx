import item1 from "../../../../img/of_acad/especialidades/item/especialidades.png";
import item2 from "../../../../img/of_acad/especialidades/item/cuatrimestres.png";
import item3 from "../../../../img/of_acad/especialidades/item/año.png";

function NumEsp() {
    

    return(
        <div>
     <div className="header_cont_clm2">
        {/*Secciones num especialidades*/}
        <div className='acd_grid_cont poppins-semibold'>
                    <div className='acd_img_of'>
                        <img src={item1} alt={item1} />
                        <p>ESPECIALIDADES</p>
                    </div>
                    <div className='acd_img_of'>
                        <img src={item2} alt={item2} />
                        <p>CUATRIMESTRES</p>
                    </div>
                    <div className='acd_img_of'>
                        <img src={item3} alt={item3} />
                        <p>(CONSULTA EL PLAN DE ESTUDIOS)</p>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default NumEsp;