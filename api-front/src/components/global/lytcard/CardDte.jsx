import { useState } from "react";
import dte_1vi from "../../../img/index/cards_ds/dte_1vi.png";
import dte_1hov from "../../../img/index/cards_ds/dte_1hov.png";
import dte_2vi from "../../../img/index/cards_ds/dte_2vi.png";
import dte_2hov from "../../../img/index/cards_ds/dte_2hov.png";

function CardDte() {
  const [dte, setDte] = useState([
    {
      namedte: "Aída Rosalba Arroyo Garcés",
      testdte:
        "La docente Aída no solo enseña psicología, sino que la vive. Su pasión por la materia es contagiosa, y cada clase es una inmersión en el fascinante mundo de la mente humana.",
      licdte: "Licenciada en Psicología",
      sededte: "Campeche",
      imgdte1: dte_1vi,
      imgdte2: dte_1hov,
    },
    {
      namedte: "Raúl Imanol Canepa Sarmiento",
      testdte:
        "Su pasión por el idioma inglés es evidente desde el momento en que entra en el aula. No se limita a enseñar gramática y vocabulario",
      licdte: "Licenciado en Lengua Inglesa",
      sededte: "Campeche",
      imgdte1: dte_2vi,    
      imgdte2: dte_2hov,
    },
  ]);

  return (
    <div>
      <section className="container_global arg_top_butt_box">
        <br />
        <h3 className="txt_bold_tittle txt_cnt_dte_ds">
          NUESTROS DOCENTES <span className="col_txt_hd2">DESTACADOS</span>
        </h3>
        <br />

        

<div className="flx_row_card">

{dte.map((dte, index) => (
          <div className="card_dte_ds_cont">
            <div className="fr_card_dte1">
              <img className="hov1_card_dte" src={dte.imgdte1} alt={dte.namedte} />
              <img className="hov1_card_dte2" src={dte.imgdte2} alt={dte.namedte} />
            </div>

            <div key={index} className="fr_card_dte2">
              <h3 className="poppins-bold col_txt_hd2">{dte.namedte}</h3>
              <br />
              <p>{dte.testdte}</p>
              <br />
              <h4>{dte.licdte}</h4>
              <p className="col_txt_hd2">
                Docente de Universidad INNOVA {dte.sededte}
              </p>
            </div>

          </div>
        ))}
</div>


   
      </section>
    </div>
  );
}

export default CardDte;
