import ObjLic from "../../ObjetAcad/ObjLic";
import { BiSolidBookBookmark } from "react-icons/bi";
import { BiSolidLayout } from "react-icons/bi";
import { Link } from "react-router-dom";

function CardLic() {
  console.log(ObjLic);
  return (
    
    <div className="header_cont_clm2">

      {/*Posiciones Grid*/}
      <div className="card-adc-grid-cont">
                   
      
      {/*Fondo de la imagen*/}
      {ObjLic.map((item) => (
       <Link to="/Pedagogia">
      <div key={item.idlic} className="card-container-ind">

        {/*Tamaño de la carta*/}
        
        <div  className="flx-card-andc">
        {/*Información de la licenciatura */}

          <div  className="txt-div-left">
          <h1>{item.licenciatura}</h1>
          <br />
          <p><span><BiSolidBookBookmark/></span> {item.cuatrimestres} CUATRIMESTRES</p>
          <p><span><BiSolidLayout/></span>RVOE {item.numrvoe}</p>
          <br />
          <p>{item.inf}</p>
          </div>

        {/*Imagen de la licenciatura*/}
        <div className="img-div-right">
          <img src={item.imglic} alt={item.imglic} />
        </div>
        </div> 
      </div>
      </Link>

        ))}
        
      </div>      
    </div>
  );
}


export default CardLic;
