import hd_doc from "../../../../img/of_acad/doctorados/Header_doc.png";
import NumDoc from "./NumDoc";

function HeaderDoc() {
  return (
    <div>
      <div className="header_dsg_of_acd_doc">
        <div className="clm_hdr_of_acd">
          <div className="txt_hdr_of_adc">
            <h1 className="poppins-bold">DOCTORADOS</h1>
            <br />
            <p className="poppins-regular">
              Es el nivel más alto de estudios académicos, enfocado en la
              investigación avanzada y la generación de nuevo conocimiento.
            </p>
            <p className="poppins-regular">
            Transforma tu pasión en conocimiento y lidera el cambio en tu campo con un doctorado. ¡El futuro está en tus manos!
            </p>
            <br />
            <h4 className="poppins-semibold">RVOES FEDERALES -SEP</h4>
            <h4 className="poppins-semibold">
              DOCTORADOS CON VALIDACIÓN OFICIAL.
            </h4>
          </div>

          <div className="img_hdr_of_adc">
            <img src={hd_doc} alt={hd_doc} />
          </div>
        </div>
      </div>
      <NumDoc/>
    </div>
  );
}

export default HeaderDoc;
