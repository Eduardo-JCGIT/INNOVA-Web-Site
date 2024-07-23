import hd_lc from "../../../../img/of_acad/licenciaturas/header_lic.png";
import NumAcd from "./NumLic";

function HeaderLic() {
  return (
    <div>
      <div className="header_dsg_of_acd">

        <div className="clm_hdr_of_acd">
        <div className="txt_hdr_of_adc">
          <h1 className="poppins-bold">LICENCIATURAS</h1>
          <br />
          <p className="poppins-regular">
            Amplía tus conocimientos, desarrolla habilidades y alcanza tus metas
            académicas. ¡Inscríbete ahora y da el primer paso hacia un futuro
            brillante!
          </p>
            <br />
          <h4 className="poppins-semibold">RVOES FEDERALES -SEP</h4>
          <h4 className="poppins-semibold">LICENCIATURAS CON VALIDACIÓN OFICIAL.</h4>
        </div>

        <div className="img_hdr_of_adc">
          <img src={hd_lc} alt={hd_lc} />
        </div>
        </div>

      </div>
      <NumAcd/>
     
    </div>
  );
}

export default HeaderLic;
