import hd_esp from "../../../../img/of_acad/especialidades/Header_esp.png";
import NumEsp from "./NumEsp";

function HeaderEsp() {
  return (
    <div>
      <div className="header_dsg_of_acd_esp">
        <div className="clm_hdr_of_acd">
          <div className="txt_hdr_of_adc">
            <h1 className="poppins-bold">ESPECIALIDADES</h1>
            <br />
            <p className="poppins-regular">
              Una especialidad se enfoca en profundizar conocimientos en un área
              específica, desarrollando habilidades avanzadas y expertas. ¡Eleva
              tu carrera y conviértete en un líder en tu campo!
            </p>
            <br />
            <h4 className="poppins-semibold">RVOES FEDERALES -SEP</h4>
            <h4 className="poppins-semibold">
              ESPECIALIDADES CON VALIDACIÓN OFICIAL.
            </h4>
          </div>

          <div className="img_hdr_of_adc">
            <img src={hd_esp} alt={hd_esp} />
          </div>
        </div>
      </div>
      <NumEsp />
    </div>
  );
}

export default HeaderEsp;
