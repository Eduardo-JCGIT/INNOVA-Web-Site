import element2 from '../../img/index/element2.png';
import element3 from '../../img/index/element3.png';
import { CgMonday } from "react-icons/cg";



function Infpt1() {
    return(
        <div>
            <section className=' container_global cont_info_ind'>
                <div className='cont_info_item2'>
                    <img src={element2} alt={element2} />
                </div>

                <div  className='cont_info_item1'>
                <h3 className='txt_bold_tittle'> <CgMonday className='Cg_color_item'/> Asesorías presenciales</h3>
                <p>En el estado de campeche podrás acudir de manera presencial los sábados a tomar tus sesiones.</p>
                <br/>
                <h3 className='txt_bold_tittle'> <CgMonday className='Cg_color_item'/> Sesión Online</h3>
                <p>La sesión presencial estará disponible en tu plataforma para que ingreses y puedas tomar tu asesoría, estés donde estés.</p>
                <br/>
                <h3 className='txt_bold_tittle'> <CgMonday className='Cg_color_item'/> Grabaciónes</h3>
                <p>Tus sesiones estarán disponibles en tu plataforma para que las veas las veces que quieras.</p>
                </div>
            </section>

            <section className='container_global cont_info_ind'>
                <div  className='cont_info_item1'>
                <h3 className='txt_bold_tittle'> <span className='col_txt_hd2'>¿QUIÉNES</span> SOMOS?</h3>
                <br />
                <p><CgMonday className='Cg_color_item'/> Somos una institución que se dedica al sano desarrollo de la vida estudiantil, donde fomentamos la vida cultural de cada alumno de UNIVERSIDAD INNOVA.</p>
                <br/>
                <p><CgMonday className='Cg_color_item'/> Tu universidad ONLINE más cerca de ti, INNOVA cuenta clubes de estudios sabatinos presenciales donde se analizan a detalle cada tema, con un maestro especialista en la materia.</p>
                <br/>
                <p><CgMonday className='Cg_color_item'/> Todas las carreras cuentan con acreditación ante SEP, RVOES VIGENTES y una duración de 3 años (Plan cuatrimestral).</p>
                </div>
                <div className='cont_info_item2'>
                    <img src={element3} alt={element3} />
                </div>
            </section>
        </div>
    )
}

export default Infpt1;