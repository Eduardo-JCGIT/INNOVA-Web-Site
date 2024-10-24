import layoud1 from '../../img/index/element1.png'
import item1 from '../../img/item/acad_of/lic.png'
import item2 from '../../img/item/acad_of/mtr.png'
import item3 from '../../img/item/acad_of/doc.png'
import item4 from '../../img/item/acad_of/esp.png'
import { Link } from 'react-router-dom'

function HeaderInd() {
    return(
        <div>
            <header className='header_cont_clm'>
                <div className="grid_heade_cont">
                <div className='clm_hd1'>
                <h2 className='poppins-bold'>BIENVENIDO</h2>
                <br />
                <h1 className='poppins-bold'>TU <span className='col_txt_hd'>UNIVERSIDAD ONLINE </span> MÁS CERCA DE TI</h1>
                <br />
                <h3 className='poppins-semibold '>¡ Ya iniciamos inscripciones !</h3>
                <br />
                <br />
                <h3 className='poppins-semibold '>DESCUBRE NUESTRAS OFERTAS ACADÉMICAS</h3>
                <br/>

                <div className='btn-cont1'>
                    <Link to="/Inscripciones" target="_blank" rel="noopener noreferrer"><button className='poppins-semibold '>Proceso de inscripción</button></Link>
                    <a href="https://wa.me/message/DQ76YHFKDBXGN1" target="_blank" rel="noopener noreferrer"><button className='poppins-semibold '>Asesor académico</button></a>
                </div>
                </div>
                
                {/*Column*/}

                <div className='clm_hd2'>
                <img src={layoud1} alt={layoud1} />
                </div>
                </div>

                {/*Secciones num especialidades*/}
                <div className='acd_grid_cont poppins-semibold'>
                    <div className='acd_img_of'>
                        <img src={item1} alt={item1} />
                        <p>LICENCIATURAS</p>
                    </div>
                    <div className='acd_img_of'>
                        <img src={item2} alt={item2} />
                        <p>MAESTRÍAS</p>
                    </div>
                    <div className='acd_img_of'>
                        <img src={item3} alt={item3} />
                        <p>DOCTORADOS</p>
                    </div>
                    <div className='acd_img_of'>
                        <img src={item4} alt={item4} />
                        <p>ESPECIALIDADES</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HeaderInd;