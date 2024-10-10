import CardDte from '../global/lytcard/CardDte';
import CardAlu from '../global/lytcard/CardAlu';
import element4 from '../../img/index/element4.png';
import element5 from '../../img/index/element5.png';
import { CgMonday } from "react-icons/cg";

const Infpt2 = () => {

    return(
        <div>
            <br />
        <section className=' container_global cont_info_ind'>
            <div className='cont_info_item2'>
                <img src={element4} alt={element4} />
            </div>
            <div  className='cont_info_item1'>
            <h3 className='txt_bold_tittle'> UN DOCENTE DE <span className="col_txt_hd2">INNOVA</span> ES</h3>
            <br />
            <p>Un especialista en la materia, altamente capacitado para impartir cátedra.</p>
            <br/>
            <p><CgMonday className='Cg_color_item'/> 5 años de experiencia como docente</p>
            <br/>
            <p><CgMonday className='Cg_color_item'/> 5 años de experiencia laboral</p>
            <br />
            <p>De esta manera aseguramos que el alumno viva las experiencias de sus docentes, no solo es teoría si no práctica.</p>
            </div>
        </section>
        <br />
        
        <CardDte/>

        <br/>
        <section className=' container_global cont_info_ind3'>
            <div  className='cont_info_item1'>
            <h3 className='txt_bold_tittle'> UN ESTUDIANTE DE <span className="col_txt_hd2">INNOVA</span> ES</h3>
            <br />
            <p>Un estudiante en la Universidad INNOVA se beneficia de una educación flexible y moderna.</p>
            <br/>
            <p><CgMonday className='Cg_color_item'/>Sabatinas y en línea.</p>
            <br/>
            <p><CgMonday className='Cg_color_item'/>Respaldadas por herramientas como Google Workspace for Education.</p>
            <br />
            <p><CgMonday className='Cg_color_item'/>Los estudiantes pueden aprender de manera asincrónica y recibir asesorías presenciales cuando sea necesario.</p>
            <br />
            <p><CgMonday className='Cg_color_item'/>Actividades extracurriculares.</p>
            <br />
            </div>

            <div className='cont_info_item2'>
                <img src={element5} alt={element5} />
            </div>
        </section>

        <CardAlu/>
    </div>
    )
}

export default Infpt2;