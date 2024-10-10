import ObjDoc from "../../ObjetAcad/ObjDoc";
import { BiSolidBookBookmark } from "react-icons/bi";
import { BiSolidLayout } from "react-icons/bi";

function CardDoc() {
  return (

    
    <div className="header_cont_clm2">

      {/*Posiciones Grid*/}
      <div className="card-adc-grid-cont">
                   
      
      {/*Fondo de la imagen*/}
      {ObjDoc.map((item) => (
      <div key={item.iddoc} className="card-container-ind-doc">

        {/*Tamaño de la carta*/}
        
        <div  className="flx-card-andc">
        {/*Información de la licenciatura */}

          <div  className="txt-div-left">
          <h1>{item.doctorado}</h1>
          <br />
          <p><span><BiSolidBookBookmark/></span> {item.cuatrimestres} CUATRIMESTRES</p>
          <p><span><BiSolidLayout/></span>RVOE {item.numrvoe}</p>
          <br />
          <p>{item.inf}</p>
          </div>

        {/*Imagen de la licenciatura*/}
        <div className="img-div-right">
          <img src={item.imgdoc} alt={item.imgdoc} />
        </div>
        
        </div> 


      </div>   
 
        ))}



          
        
      </div>

      
    </div>
  );
}


export default CardDoc;