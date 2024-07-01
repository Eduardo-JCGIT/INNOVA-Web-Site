import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import { FaClock } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import innova3 from "../../img/icon/innova3.png";
import icon1ftr from "../../img/icon/rvoe.png";
import icon2ftr from "../../img/icon/googlewfe.png";

function Footer() {
  return (
    <footer>
      <div className="footer_glob_dsg">

        <div className="footer_column_glob">
          <div className="footer_column_sec">
            <h4>NUESTRAS REDES SOCIALES</h4>
            <br />
            <div className="icon_foot_dsg_col">
            <FaFacebook className="icon_foot_dsg"/>
            <AiFillInstagram className="icon_foot_dsg"/>
            <RiWhatsappFill className="icon_foot_dsg"/>
            <FaYoutube className="icon_foot_dsg"/>
            </div>
            <br />
            <h4>VALIDACIÓN Y HERRAMIENTAS OFICIALES</h4>
            <br />
            <div className="icon_clm_size">
                <a href="https://sirvoes.sep.gob.mx/sirvoes/mvc/consultas" target="_blank"><img src={icon1ftr}alt={icon1ftr} /></a>
                <a href="https://edu.google.com/workspace-for-education/editions/overview/" target="_blank"><img src={icon2ftr} alt={icon2ftr} /></a>
            </div>
          </div>

          <div className="footer_column_sec">
            <h4>EXPLORA</h4>
            <br />
            <ul>
              <li>Inicio</li>
              <li>Oferta Académica</li>
              <li>Inscripciones</li>
              <li>Proyecto DESA</li>
              <li>Maestros</li>
              <li>Alumnos</li>
              <li>Equipo INNOVA</li>
              <li>Contacto</li>
            </ul>
          </div>

          <div className="footer_column_sec">
            <h4>INFORMACIÓN DE CONTACTO</h4>
            <br />
            <ul>
              <li>
                <BsTelephoneFill className="icon_foot_dsg"/> 981 813 63 02
              </li>
              <li>
                <TbMailFilled className="icon_foot_dsg"/> escolar.innova@gmail.com
              </li>
              <li>
                <FaClock className="icon_foot_dsg"/> lunes a viernes : 7:00 am - 3:00 pm
              </li>
              <li>
                <SiGooglemaps className="icon_foot_dsg"/> C. 49 38, Barrio de Guadalupe, 24010 San
                Francisco de Campeche, Camp.
              </li>
            </ul>
          </div>
        </div>

        <br />
        <hr />  
        <div className="footer_column_glob2">
        <p>
          Copyright © 2024 UNIVERSIDAD INNOVA | developer by Eduardo Jiménez
          Cruz
        </p>
        <img src={innova3} alt={innova3} />
        </div>

      </div>
    </footer>
  );
}

export default Footer;
