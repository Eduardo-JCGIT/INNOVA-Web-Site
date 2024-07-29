import lyt_item1 from '../../img/index/layout_of/item_of1.jpg';
import lyt_item2 from '../../img/index/layout_of/item_of2.jpg';
import lyt_item3 from '../../img/index/layout_of/item_of3.jpg';
import lyt_item4 from '../../img/index/layout_of/item_of4.jpg';
import { Link } from 'react-router-dom';

function Offerlayout() {
    
    return(
        <div>
            <div className='container_global txt_bold_tittle'>
                <h3>Oferta académica</h3>
                <br />
            </div>

            <section>
            
            {/*Child 1*/}
            <Link to="/Licenciaturas">
            <div className="off_img_lyt">
            <img className='img_lyt_item' src={lyt_item1} alt={lyt_item1}/>

            <div className="txt_lyt_pr">
            <h2 className='poppins-bold'>LICENCIATURAS</h2>
            <p className='poppins-regular'>15 Licenciaturas</p>
            </div>
            </div>
            </Link>
       
            {/*Child 2 */}

            <Link to="/Maestrias">
            <div className="off_img_lyt">
            <img className='img_lyt_item' src={lyt_item2} alt={lyt_item2} />
            
            <div className="txt_lyt_pr">
            <h2 className='poppins-bold'>MAESTRÍAS</h2>
            <p className='poppins-regular'>7 Mestrías</p>
            </div>
            </div>
            </Link>


            {/*Child 3 */}
            
            <Link to="/Doctorados">
            <div className="off_img_lyt">
            <img className='img_lyt_item' src={lyt_item3} alt={lyt_item3} />

            <div className="txt_lyt_pr">
            <h2 className='poppins-bold'>DOCTORADOS</h2>
            <p className='poppins-regular'>3 Doctorados</p>
            </div>
            </div>
            </Link>

            {/*Child 4 */}
            <Link to="/Especialidades">
            <div className="off_img_lyt">
            <img className='img_lyt_item' src={lyt_item4} alt={lyt_item4} />

            <div className="txt_lyt_pr">
            <h2 className='poppins-bold'>ESPECIALIDADES</h2>
            <p className='poppins-regular'>3 Especialidades</p>
            </div>
            </div>
            </Link>

            </section>

            
        </div>
    )
}

export default Offerlayout;