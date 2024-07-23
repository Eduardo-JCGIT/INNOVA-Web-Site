import item1 from "../../../../img/of_acad/maestrias/item/maestrias.png";
import item2 from "../../../../img/of_acad/maestrias/item/cuatrimestres.png";
import item3 from "../../../../img/of_acad/maestrias/item/año.png";

function NumMtr() {
    

    return(
        <div>
     <div className="header_cont_clm2">
        {/*Secciones num especialidades*/}
        <div className='acd_grid_cont poppins-semibold'>
                    <div className='acd_img_of'>
                        <img src={item1} alt={item1} />
                        <p>MAESTRÍAS</p>
                    </div>
                    <div className='acd_img_of'>
                        <img src={item2} alt={item2} />
                        <p>U 8 CUATRIMESTRES</p>
                    </div>
                    <div className='acd_img_of'>
                        <img src={item3} alt={item3} />
                        <p>AÑO Y 4/8 MESES</p>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default NumMtr;