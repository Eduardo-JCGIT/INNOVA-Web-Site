import Footer from "../global/Footer";
import Nav from "../global/Nav";
import item1 from "../../img/desa/item_desa_1.png";
import item2 from "../../img/desa/item_desa_2.png";
import item3 from "../../img/desa/item_desa_3.png";
import item4 from "../../img/desa/item_desa_4.png";
import { CgMonday } from "react-icons/cg";

function Desa() {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <section className="nav_top_padg_sep">

        <div className="container_global">
        <div className="flx_desa_grid">
          <div className="flx_desa_cent_img">
            <img src={item1} alt={item1} className="img_flx_desa" />
          </div>
          <div>
            <h1 className="col_txt_hd2 poppins-bold font_size_title_global">PROYECTO <span className="col_txt_hd">DESA</span></h1>
            
            <br />
            <p className="font_size_txt_p_global">
              El Departamento de Desarrollo Académico de nuestra universidad
              trabaja para asegurar el crecimiento integral de los estudiantes,
              enfocándose en su rendimiento académico, bienestar emocional e
              identidad comunitaria.
            </p>
            <br />
            <p className="font_size_txt_p_global">En el último período, hemos implementado
            varias iniciativas y actividades para cumplir estos objetivos.</p>
          </div>
        </div>
        </div>


    <div className="cont_color_anch_desa color txt_sec_desa_anch">
    <div className="container_global">
        <div className="flx_desa_grid">
          <div>
            <h1 className="poppins-bold font_size_title_global">CAPACITACIÓN A DOCENTES</h1>
            <br />
            <p className="font_size_txt_p_global">
            Equipar a nuestros docentes con las herramientas necesarias para apoyar a los estudiantes de manera efectiva y organizar sesiones de capacitación enfocadas en:
            </p>
            <br />  
            <ul>
              <li className="li_marg_ds_glb"><span><CgMonday className='Cg_color_item2'/>  </span> Estrategias pedagógicas innovadoras</li>
              <li className="li_marg_ds_glb"><span><CgMonday className='Cg_color_item2'/>  </span> Manejo de la diversidad en el aula</li>
              <li className="li_marg_ds_glb"><span><CgMonday className='Cg_color_item2'/>  </span> Técnicas de apoyo socioemocional</li>
            </ul>
          </div>

          <div className="flx_desa_cent_img">
            <img src={item2} alt={item2} className="img_flx_desa" />
          </div>
        </div>

        <div className="flx_desa_grid">
          <div className="flx_desa_cent_img">
            <img src={item3} alt={item3} className="img_flx_desa" />
          </div>
          <div>
            <h1 className="poppins-bold font_size_title_global">TALLERES CON ALUMNOS Y DOCENTES</h1>
            <br />
            <p className="font_size_txt_p_global">
           
Estos esfuerzos están enfocados en mejorar la interacción y el entendimiento mutuo dentro de nuestra comunidad académica:
            </p>
            <br />
            <ul>
              <li className="li_marg_ds_glb"><span><CgMonday className='Cg_color_item2'/>  </span> Abordar en estos talleres temas relevantes como la comunicación efectiva, la gestión del tiempo y el manejo del estrés académico, proporcionando herramientas útiles.</li>
              <li className="li_marg_ds_glb"><span><CgMonday className='Cg_color_item2'/>  </span> Facilitar un espacio seguro y acogedor para compartir experiencias y buscar soluciones conjuntas a problemas comunes.</li>
              <li className="li_marg_ds_glb"><span><CgMonday className='Cg_color_item2'/>  </span> Promover una cultura de colaboración y apoyo mutuo dentro de nuestra comunidad universitaria, fortaleciendo el sentido de pertenencia y camaradería.</li>
            </ul>
          </div>
        </div>
        </div>
        </div>


        <div className="container_global">
        <div className="flx_desa_grid">
          <div>
            <h1 className="col_txt_hd2 poppins-bold font_size_title_global">ACTIVIDADES PARA EL DESARROLLO DE HABILIDADES</h1>
            <br />
            <p className="font_size_txt_p_global">
              Reconociendo la importancia de las habilidades no solo académicas,
              sino también personales y profesionales, hemos organizado una
              variedad de actividades destinadas a potenciar el desarrollo
              integral de nuestros estudiantes. Estas actividades incluyen
              talleres de liderazgo, habilidades de trabajo en equipo,
              resolución de conflictos y manejo de la ansiedad.
            </p>
          </div>
          <div className="flx_desa_cent_img">
            <img src={item4} alt={item4} className="img_flx_desa" />
          </div>
        </div>
        </div>

      </section>

      <Footer/>
    </div>
  );
}

export default Desa;
