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
import { SiGithub } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer_glob_dsg">

        <div className="footer_column_glob">
          <div className="footer_column_sec">
            <h4>NUESTRAS REDES SOCIALES</h4>
            <br />
            <div className="icon_foot_dsg_col">
            <div><a href="https://www.facebook.com/UniversidadInnovaCampeche" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon_foot_dsg"/>
            </a>
            </div>
            <div>
            <a href="https://www.instagram.com/innovacamp_?igsh=MXM2YTl2MWxlaHp4dw==" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className="icon_foot_dsg"/>
            </a>
            </div>
            <div><a href="https://wa.me/message/DQ76YHFKDBXGN1" target="_blank" rel="noopener noreferrer">
            <RiWhatsappFill className="icon_foot_dsg"/>
            </a></div>
            <div><a href="https://www.youtube.com/@mentesinnovadoras2024" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="icon_foot_dsg"/>
            </a></div>
            <div>
              <a href="https://www.tiktok.com/@innova_campeche?_t=8qlPUf81L1R&_r=1" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="icon_foot_dsg"/>
              </a>
            </div>
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
            <ul className="footer_sec_manu_lop">
              <Link to="/" >
              <li>Inicio</li>
              </Link>
              <Link to="/Licenciaturas">
              <li>Licenciaturas</li>
              </Link>
              <Link to="/Inscripciones">
              <li>Inscripciones</li>
              </Link>
              <Link to="/Desa">
              <li>Proyecto DESA</li>
              </Link>
              <Link to="/Mantenimiento" >
              <li>Maestros</li>
              </Link>
              <Link to="/Mantenimiento" >
              <li>Alumnos</li>
              </Link>
              <Link to="/Equipo-INNOVA">
              <li>Equipo INNOVA</li>
              </Link>
              <Link to="/Contacto">
              <li>Contacto</li>
              </Link>
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
        <div className="sec_git_dev">
        <p>Developed by Eduardo Jiménez</p> 
        <a href="https://github.com/Eduardo-JCGIT" target="_blank"><SiGithub /></a>
        </div>
        <p>
        Copyright © 2024 UNIVERSIDAD INNOVA. Todos los derechos reservados.
        </p>
        <img src={innova3} alt={innova3} />
        </div>

      </div>
    </footer>
  );
}

export default Footer;
