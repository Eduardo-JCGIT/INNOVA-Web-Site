import Nav from "../global/Nav";
import Footer from "../global/Footer";
import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <section className="container_global">
        <div className="nav_top_padg_sep">
          <h1 className="contact_ind_tittle col_txt_hd poppins-bold">
            CONTACTO
          </h1>
          <div className="container_contact_inv">
            <div className="map_rsp_contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2231.4427164253666!2d-90.53707031326127!3d19.847383215852336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f833721a2c5b45%3A0x8800d672e97a8291!2sUNIVERSIDAD%20INNOVA%20OFICINA%20DE%20ADMISIONES%3A%20CAMPECHE!5e0!3m2!1ses-419!2smx!4v1721933676076!5m2!1ses-419!2smx" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
              <h2 className="poppins-bold col_txt_hd2"> <span><FaClock /></span> HORARIOS</h2>
              <p>lunes a viernes : 7:00 am - 3:00 pm</p>
              <br />
              <h2 className="poppins-bold col_txt_hd2"> <span><FaLocationDot /></span> Ubicación</h2>
              <p>
                Oficina de Admisiones - ZONA CENTRO C. 49 168, Barrio de
                Guadalupe, 24010 San Francisco de Campeche, Camp. A un costado
                del Jardín botánico, debajo de Terraza 49
              </p>
              <br />
              <h2 className="poppins-bold col_txt_hd2"><IoLogoWhatsapp/> Whatsapp</h2>
              <p>999 737 2165</p>
              <br />
              <h2 className="poppins-bold col_txt_hd2"><FaPhoneAlt/> TELÉFONO</h2>
              <p>981 813 6302</p>
              <br />
              <h2 className="poppins-bold col_txt_hd2"><IoMdMail /> E-mail</h2>
              <p>gestor.edu.innova@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
