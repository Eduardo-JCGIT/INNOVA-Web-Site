import { useState } from "react";
import alu_1vi from "../../../img/index/cards_ds/alu_1vi.png";
import alu_1hov from "../../../img/index/cards_ds/alu_1hov.png";
import alu_2vi from "../../../img/index/cards_ds/alu_2vi.png";
import alu_2hov from "../../../img/index/cards_ds/alu_2hov.png";

function CardAlu() {
  const [alu, setAlu] = useState([
    {
      namealu: "Mario Jesús González Alcocer",
      testalu:
        "Como estudiante de la Universidad INNOVA, he tenido una experiencia educativa excepcional. La flexibilidad de los horarios y la modalidad en línea me permiten balancear mis estudios con otras responsabilidades personales y profesionales.",
      licalu: "Licenciatura en Sistemas Computacionales",
      sedealu: "Campeche",
      imgalu1: alu_1vi,
      imgalu2: alu_1hov,
    },
    {
      namealu: "Adriana Paloma Quimé Rodríguez",
      testalu:
        "Después de graduarme con mi licenciatura, decidí continuar mi educación en la Universidad INNOVA y me inscribí en su programa de maestría en Ciencias de la educación. La calidad de la educación y el apoyo continuo que recibí durante mi maestría fueron excepcionales. ",
      licalu: "Maestría en Ciencias de la Educación",
      sedealu: "Campeche",
      imgalu1: alu_2vi,    
      imgalu2: alu_2hov,
    },
  ]);

  return (
    <div>
      <section className="container_global marg_top_butt_box">
        <br />
        <h3 className="txt_bold_tittle txt_cnt_dte_ds">
          TESTIMONIOS DE ALUMNOS <span className="col_txt_hd2">INNOVA</span>
        </h3>
        <br />

        

<div className="flx_row_card">

{alu.map((alu, index) => (
          <div className="card_dte_ds_cont">
            <div className="fr_card_dte1">
              <img className="hov1_card_dte" src={alu.imgalu1} alt={alu.namealu} />
              <img className="hov1_card_dte2" src={alu.imgalu2} alt={alu.namealu} />
            </div>

            <div key={index} className="fr_card_dte2">
              <h3 className="poppins-bold col_txt_hd2">{alu.namealu}</h3>
              <br />
              <p>{alu.testalu}</p>
              <br />
              <h4>{alu.licalu}</h4>
              <p className="col_txt_hd2">
                Docente de Universidad INNOVA {alu.sedealu}
              </p>
            </div>

          </div>
        ))}
</div>

      </section>
    </div>
  );
}

export default CardAlu;
