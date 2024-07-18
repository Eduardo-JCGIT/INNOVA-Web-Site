import ObjLic from "../ObjetAcad/ObjLic";
import { BiSolidBookBookmark } from "react-icons/bi";
import { BiSolidLayout } from "react-icons/bi";

function CardLic() {

  return (
    <div className="header_cont_clm2">

      {/*Posiciones Grid*/}
      <div className="card-adc-grid-cont">
                   
      {/*Fondo de la imagen*/}
      <div className="card-container-ind">

        {/*Tamaño de la carta*/}
        {ObjLic.map((item) => (
        <div key={item.idlic} className="flx-card-andc">
        {/*Información de la licenciatura */}
          <div  className="txt-div-left">
          <h1>{item.licenciatura}</h1>
          <h4>(RVOE SEP) {item.numrvoe}</h4>
          <br />
          <p><span><BiSolidBookBookmark/></span> {item.cuatrimestre} CUATRIMESTRES</p>
          <p><span><BiSolidLayout/></span>{item.mode}</p>
          <br />
          <p>{item.inf}</p>
          </div>

        {/*Imagen de la licenciatura*/}
        <div className="img-div-right">
          <img src={item.imglic} alt={item.imglic} />
        </div>

        </div> 
          ))}

      </div>   
 




          
        
      </div>
    </div>
  );
}


export default CardLic;
