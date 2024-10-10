import ObjEsp from "../../ObjetAcad/ObjEsp";
import { BiSolidBookBookmark } from "react-icons/bi";
import { BiSolidLayout } from "react-icons/bi";

function CardEsp() {
  return (

    
    <div className="header_cont_clm2">

      {/*Posiciones Grid*/}
      <div className="card-adc-grid-cont">
                   
      
      {/*Fondo de la imagen*/}
      {ObjEsp.map((item) => (
      <div key={item.idesp} className="card-container-ind-esp">

        {/*Tamaño de la carta*/}
        
        <div  className="flx-card-andc">
        {/*Información de la licenciatura */}

          <div  className="txt-div-left">
          <h1>{item.especialidad}</h1>
          <br />
          <p><span><BiSolidBookBookmark/></span> {item.cuatrimestres} CUATRIMESTRES</p>
          <p><span><BiSolidLayout/></span>ROVE {item.numrvoe}</p>
          <br />
          <p>{item.inf}</p>
          </div>

        {/*Imagen de la licenciatura*/}
        <div className="img-div-right">
          <img src={item.imgesp} alt={item.imgesp} />
        </div>
        </div> 
      </div>   
        ))}
      </div>
    </div>
  );
}


export default CardEsp;