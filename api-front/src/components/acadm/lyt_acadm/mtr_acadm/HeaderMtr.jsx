import hd_mtr from "../../../../img/of_acad/maestrias/Header_mtr.svg";
import NumMtr from "./NumMtr";
function HeaderMtr() {
  return (
    <div>
      <div className="header_dsg_of_acd_mtr">
        <div className="clm_hdr_of_acd">
          <div className="txt_hdr_of_adc">
            <h1 className="poppins-bold">MAESTRÍAS</h1>
            <br />
            <p className="poppins-regular">
              Amplía tus conocimientos y perfecciona tus habilidades con una
              maestría. ¡Motívate y descubre cómo alcanzar tus metas académicas
              te abrirá las puertas a un futuro brillante y lleno de
              oportunidades!
            </p>
            <br />
            <h4 className="poppins-semibold">RVOES FEDERALES -SEP</h4>
            <h4 className="poppins-semibold">
              MAESTRÍAS CON VALIDACIÓN OFICIAL.
            </h4>
          </div>

          <div className="img_hdr_of_adc">
            <img src={hd_mtr} alt={hd_mtr} />
          </div>
        </div>
      </div>
      <NumMtr/>
    </div>
  );
}

export default HeaderMtr;
