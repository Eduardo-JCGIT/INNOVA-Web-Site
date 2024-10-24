import { useState } from "react";
import alu_1vi from "../../../img/index/cards_ds/alu_1vi.png";
import alu_1hov from "../../../img/index/cards_ds/alu_1hov.png";
import alu_2vi from "../../../img/index/cards_ds/alu_2vi.png";
import alu_2hov from "../../../img/index/cards_ds/alu_2hov.png";

function CardAlu() {
  const [alu, setAlu] = useState([
    {
      namealu: "Mario González",
      testalu:
        "Para mí ha sido un honor estudiar en esta universidad, los docentes están muy preparados para enseñar y para que nosotros podamos dar un gran paso al profesionalismo. Cada persona que integra la sociedad de INNOVA se ha encargado de dar muy buen seguimiento en cuanto a lo académico se trata.",
      licalu: "Licenciatura en Contabilidad",
      sedealu: "Estudiante",
      imgalu1: alu_1vi,
      imgalu2: alu_1hov,
    },
    {
      namealu: "Paloma Quimé",
      testalu: "Estudiar en Universidad INNOVA fue una experiencia muy enriquecedora. Aprendí de manera práctica y moderna, aprovechando la tecnología y nuevas formas de enseñanza. Los profesores son muy preparados y siempre te motivan a dar lo mejor de ti.",
      licalu: "Maestría en Ciencias de la Educación",
      sedealu: "Egresada",
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
                {alu.sedealu} de Universidad INNOVA
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