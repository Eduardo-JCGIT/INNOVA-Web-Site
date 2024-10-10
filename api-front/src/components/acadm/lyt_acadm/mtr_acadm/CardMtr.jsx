import ObjMtr from "../../ObjetAcad/ObjMtr";
import { BiSolidBookBookmark } from "react-icons/bi";
import { BiSolidLayout } from "react-icons/bi";

function CardMtr() {
  return (

    
    <div className="header_cont_clm2">

      {/*Posiciones Grid*/}
      <div className="card-adc-grid-cont">
                   
      
      {/*Fondo de la imagen*/}
      {ObjMtr.map((item) => (
      <div key={item.idmtr} className="card-container-ind-mtr">

        {/*Tamaño de la carta*/}
        
        <div  className="flx-card-andc">
        {/*Información de la licenciatura */}

          <div  className="txt-div-left">
          <h1>{item.maestria}</h1>
          <br />
          <p><span><BiSolidBookBookmark/></span> {item.cuatrimestres} CUATRIMESTRES</p>
          <p><span><BiSolidLayout/></span>RVOE {item.numrvoe}</p>
          <br />
          <p>{item.inf}</p>
          </div>

        {/*Imagen de la licenciatura*/}
        <div className="img-div-right">
          <img src={item.imgmtr} alt={item.imgmtr} />
        </div>
        
        </div> 


      </div>   
 
        ))}



          
        
      </div>

      
    </div>
  );
}


export default CardMtr;
