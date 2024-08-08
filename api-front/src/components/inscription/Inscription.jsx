import Nav from "../global/Nav";
import { useEffect } from "react";
import Footer from "../global/Footer";
import item from "../../img/img_inscription/ins_header.png";
import { GrContactInfo } from "react-icons/gr";     
import { MdOutlinePayments } from "react-icons/md";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { BsPersonRolodex } from "react-icons/bs";

function Inscription() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <header>
        <Nav />
      </header>

      <section className="nav_top_padg_sep ft_nav_sep_pad">
        <div className="container_global">
          <div className="flx_desa_grid">
            <div className="flx_desa_cent_img">
              <img src={item} alt={item} className="img_flx_desa" />
            </div>
            <div className="clm_hd1">
              <h1 className="col_txt_hd1 poppins-bold">
                <span className="col_txt_hd">GRACIAS</span> POR ELEGIRNOS
              </h1>
              <h2 className="col_txt_hd1">INSCRIPCIONES ABIERTAS</h2>
              <br />
              <p className="font_size_txt_p_global">
                Sigue los siguientes pasos para poder culminar tu proceso de
                inscripción, de igual manera este proceso lo puedes hacer en
                nuestras oficinas en horario de atención.
              </p>
            </div>
          </div>
        </div>

        <div className="-blue4">

          <h2 className="contact_ind_tittle col_txt_hd2 poppins-bold">
            PROCESO DE INSCRIPCIÓN
          </h2>
          <br />
          <br />

          <div className="displ_cont_inf_step">

          <div>
          <h2 className="col_txt_hd2"><span><GrContactInfo /> </span> Solicita información.</h2>
          <p>
            Regálanos un Whatsapp para brindarte toda la información, costos,
            modalidades, promociones vigentes. datos de depósito, etc.
          </p>
          <br />
          <div className='btn-cont1'>
          <a href="https://api.whatsapp.com/send?phone=9997372165&text=UNIVERSIDAD%20INNOVA:%20" target="_blank">
              <button className='poppins-semibold'>Whatsapp</button>
          </a>
          </div>

          <br />
          <br />

          <h2 className="col_txt_hd2"><span><MdOutlinePayments /> </span> Realiza el pago de tu inscripción.</h2>
          <p>
            Puedes pagar por medio de transferencia bancaria, deposito(oxxo,
            willis, banco) una vez realizado envía tu comprobante al correo que
            se te indica. Los datos de deposito se te darán en el primer paso.
          </p>

          </div>

          
          <div>
          <h2 className="col_txt_hd2"><span><RiInboxUnarchiveLine /></span> Ficha de inscripción.</h2>
          <p>
            Llena el siguiente formulario para poder generar tu ficha de
            inscripción.
          </p>
          <br />
          <div className='btn-cont1'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSceyu6LRzrCEs016sgGGpPIIVoma2XhggyZ-hFbzZc-xcK1DQ/viewform" target="_blank">
              <button className='poppins-semibold'>Inscripción</button>
          </a>
          </div>

          <br />
          <br />

          <h2 className="col_txt_hd2"><span><BsPersonRolodex /> </span> Bienvenid@</h2>
          <p>
            Formalmente serás parte de UNIVERSIDAD INNOVA tu ficha de
            inscripción se te hará llegar por medio de tu correo electrónico,
            recuerda que el envió es en días hábiles.
          </p>
          </div>

          </div>

        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Inscription;
