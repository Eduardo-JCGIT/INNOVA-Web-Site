import imglic from "../../../img/of_acad/licenciaturas/card_lic/lic_item1.png";


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
                <h4>(RVOE SEP) 20160580​ </h4>
                <br />
                <p>Ciencia que estudia la mente y el comportamiento humano.</p>
              </div>
            </div>
            {/*flexbox en columna 2*/}
            <div className="card-ind-flex">
              <img className="img-card-hover-adc" src={imglic} alt={imglic} />
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
                <h1>PSICOLOGÍA</h1>
                <h4>(RVOE SEP) 20160580​ </h4>
                <br />
                <p>Ciencia que estudia la mente y el comportamiento humano.</p>
              </div>
            </div>
            {/*flexbox en columna 2*/}
            <div className="card-ind-flex">
              <img className="img-card-hover-adc" src={imglic} alt={imglic} />
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
                <h1>PSICOLOGÍA</h1>
                <h4>(RVOE SEP) 20160580​ </h4>
                <br />
                <p>Ciencia que estudia la mente y el comportamiento humano.</p>
              </div>
            </div>
            {/*flexbox en columna 2*/}
            <div className="card-ind-flex">
              <img className="img-card-hover-adc" src={imglic} alt={imglic} />
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default CardLic;
