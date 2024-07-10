import imglic from "../../../img/of_acad/licenciaturas/card_lic/lic_item1.png";
import { BiSolidBookBookmark } from "react-icons/bi";
import { BiSolidLayout } from "react-icons/bi";

function CardLic() {
  return (
    <div className="header_cont_clm2">

      {/*Posiciones Grid*/}
      <div className="card-adc-grid-cont">

        {/*Fondo de la carta (background)*/}
        <div className="card-container-ind">
          {/*flexbox de la carta interna*/}
          <div className="flx-card-andc">
            {/*flexbox en columna 1*/}
            <div className="card-ind-flex">
              <div className="card-adc-txt-dsg">
                {/*Datos del la carrera*/}
                <h1>PSICOLOGÍA</h1>
                <h3>(RVOE SEP) 20160580​ </h3>
                <br />
                <p><span><BiSolidBookBookmark /></span> 9 CUATRIMESTRES</p>
                <p><span><BiSolidLayout /></span> ONLINE</p>
                <br />
                <p>Ciencia que estudia la mente y el comportamiento humano.</p>
              </div>
            </div>
            {/*flexbox en columna 2*/}
            <div className="card-ind-flex">
              <img className="img-card-hover-adc" src={imglic} alt={imglic}/>
            </div>
          </div>
        </div>
        
                {/*Fondo de la carta (background)*/}
                <div className="card-container-ind">
          {/*flexbox de la carta interna*/}
          <div className="flx-card-andc">
            {/*flexbox en columna 1*/}
            <div className="card-ind-flex">
              <div className="card-adc-txt-dsg">
                {/*Datos del la carrera*/}
                <h1>ADMINISTRACIÓN DE EMPRESAS​</h1>
                <h3>(RVOE SEP) 20160580​ </h3>
                <br />
                <p><span><BiSolidBookBookmark /></span> 9 CUATRIMESTRES</p>
                <p><span><BiSolidLayout /></span> ONLINE</p>
                <br />
                <p>Proceso de planificar, organizar, dirigir y controlar los recursos de una organización para alcanzar sus objetivos.</p>
              </div>
            </div>
            {/*flexbox en columna 2*/}
            <div className="card-ind-flex">
              <img className="img-card-hover-adc" src={imglic} alt={imglic}/>
            </div>
          </div>
        </div>


                {/*Fondo de la carta (background)*/}
                <div className="card-container-ind">
          {/*flexbox de la carta interna*/}
          <div className="flx-card-andc">
            {/*flexbox en columna 1*/}
            <div className="card-ind-flex">
              <div className="card-adc-txt-dsg">
                {/*Datos del la carrera*/}
                <h1>SISTEMAS COMPUTACIONALES</h1>
                <h3>(RVOE SEP) 20160580​ </h3>
                <br />
                <p><span><BiSolidBookBookmark /></span> 9 CUATRIMESTRES</p>
                <p><span><BiSolidLayout /></span> ONLINE</p>
                <br />
                <p>Conjuntos de hardware y software que permiten el procesamiento de datos.</p>
              </div>
            </div>
            {/*flexbox en columna 2*/}
            <div className="card-ind-flex">
              <img className="img-card-hover-adc" src={imglic} alt={imglic}/>
            </div>
          </div>
        </div>  


        

        
      </div>
    </div>
  );
}

export default CardLic;
