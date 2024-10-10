import Nav from "../../global/Nav";
import item from "../../../img/inf_acad/img_lic/PED.png"; 
import CardLicInfo from "./CardLicInfo";
import Footer from "../../global/Footer";
import React, { useEffect } from 'react';
import ObjInfLic from "./ObjInfLic";

function InfoLic() {

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header>
        <Nav />

        <div>
          {/*Informacion de lado izquierdo */}
          <div className="container_global nav_top_padg_sep">

          {ObjInfLic.map((item) => (

            <div className="flx_desa_grid" key={item.idlicI}>
            <div className="inflic_div_cont_1">
            <h1 className="font_size_title_global2">LICENCIATURA EN <span className="col_txt_hd">{item.licenciatura}</span></h1>
            <br />
            <h3>SEP-DGAIR-RVOE {item.numrvoe} del {item.datervoe}</h3>
            <br />
            <p className="font_size_txt_p_global">{item.descrip}</p>
            <br />
            <div className='btn-cont1'>
                    <button className='poppins-semibold'>Plan de estudio</button>
                    <button className='poppins-semibold'>Asesor académico</button>
                </div>
          </div>
          {/*Imagen de licenciatura de lado derecho */}
          <div className="inflic_div_cont_2">
            <img src={item.imglicI} alt={item.imglicI} />
          </div>

          </div>
                
                ))}
        </div>

        

        </div>  
      </header>

      <section>
        <CardLicInfo/>
      </section>
      <br />
      <br />

      <Footer/>
    </div>
  );
}

export default InfoLic;
