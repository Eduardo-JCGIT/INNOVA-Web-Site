import { useState } from 'react';
import element4 from '../../img/index/element4.png';
import element5 from '../../img/index/element5.png';
import dte_1 from '../../img/index/cards_ds/dtei_1.png';
import dte_2 from '../../img/index/cards_ds/dte_2.png';
import { CgMonday } from "react-icons/cg";

const ConceptCard = () => {
    
    const[dte, setDte] = useState([
        {namedte: 'Aída Rosalba Arroyo Garcés',
        testdte: 'La docente Aída no solo enseña psicología, sino que la vive. Su pasión por la materia es contagiosa, y cada clase es una inmersión en el fascinante mundo de la mente humana. Con una dedicación inigualable, Aída logra que los estudiantes no solo comprendan los conceptos teóricos.',
        licdte: 'Licenciada en Psicología',
        sededte: 'Campeche',
        imgdte: dte_1},
        {namedte: 'Raúl Imanol Canepa Sarmiento',
        testdte: 'Su pasión por el idioma inglés es evidente desde el momento en que entra en el aula. No se limita a enseñar gramática y vocabulario; él nos sumerge en la riqueza de la cultura angloparlante. Cada lección está diseñada para despertar el interés y la curiosidad de los estudiantes.',
        licdte: 'Licenciado en Lengua Inglesa',
        sededte: 'Campeche',
        imgdte: dte_2},
    ]);

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
        
        <section className='container_global'>
            <br />
            <h3 className='txt_bold_tittle txt_cnt_dte_ds'>NUESTROS DOCENTES  <span className="col_txt_hd2">DESTACADOS</span></h3>
            <br />
            {dte.map((dte, index) => (

            <div className='card_dte_ds_cont'>
            <div className='fr_card_dte1'>
                <img src={dte.imgdte} alt={dte.namedte} />
            </div>

         
                <div key={index} className='fr_card_dte2 dte'>
                    <h3 className='poppins-bold col_txt_hd2'>{dte.namedte}</h3>
                    <br />
                    <p>{dte.testdte}</p>
                    <br />
                    <h4>{dte.licdte}</h4>
                    <p className='col_txt_hd2'>Docente de Universidad INNOVA {dte.sededte}</p>
                </div>
            </div>
            ))}
        </section>
        <br/>
        <section className=' container_global cont_info_ind'>
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

        <section className='container_global'>
            <br />
            <h3 className='txt_bold_tittle txt_cnt_dte_ds'>TESTIMONIOS DE ALUMNOS<span className="col_txt_hd2"> INNOVA</span></h3>
            <br />
            {dte.map((dte, index) => (

            <div className='card_dte_ds_cont'>
            <div className='fr_card_dte1'>
                <img src={dte.imgdte} alt={dte.namedte} />
            </div>

         
                <div key={index} className='fr_card_dte2 dte'>
                    <h3 className='poppins-bold col_txt_hd2'>{dte.namedte}</h3>
                    <br />
                    <p>{dte.testdte}</p>
                    <br />
                    <h4>{dte.licdte}</h4>
                    <p className='col_txt_hd2'>Docente de Universidad INNOVA {dte.sededte}</p>
                </div>
            </div>
            ))}
        </section>


    </div>
    )
}

export default ConceptCard;