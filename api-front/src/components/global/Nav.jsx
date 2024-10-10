import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import innova3png from '../../img/icon/innova3.png';
import { CgClose } from "react-icons/cg";
import { CgFormatJustify } from "react-icons/cg";
import { BsFillCaretRightFill } from "react-icons/bs";


function Nav (){

  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const [visibleIcons, setVisibleIcons] = useState({
      icon1: true,
      icon2: true,
  })


  const handleClickIcon1 = () =>{
   setVisibleIcons((prevState) =>({
      ...prevState,
      icon1: true,
   }));
  };

  const handleClickIcon2 = () => {
   setVisibleIcons((prevState) => ({
     ...prevState,
     icon1: false,
   }));
 };

    return(
        <div className='position-fixed-nav-global'>
         <div className="header_nav">
         <nav className="container_nav">
            <img src={innova3png} alt={innova3png} className="nav_inv"/>
            <div className={showMenu ? 'nav_menu show_menu' : 'nav_menu'}>
               <ul className="nav_ul">
                  <li className="nav_li">
                  <Link to='/' className="nav_router">
                 <img src={innova3png} alt={innova3png} className="nav_inv nav_inv_hdn"/>
                 </Link>
                  </li>
                  <li className="nav_li">
                     <Link to='/' className="nav_router">
                        <span>Inicio</span>
                     </Link>
                  </li>

                  <li className="nav_li ">
                        <div className='nav_router'>
                        <span>Oferta Academica</span>
                        </div>
                        <ul className='drop_nav_of'>
                           <Link to="/Licenciaturas"> <li className='drop_li_of'><span><BsFillCaretRightFill /></span> Licenciaturas</li></Link> 
                           <Link to="/Maestrias"><li className='drop_li_of'><span><BsFillCaretRightFill /></span> Maestrías</li></Link> 
                           <Link to="/Doctorados"><li className='drop_li_of'><span><BsFillCaretRightFill /></span> Doctorados</li></Link>
                           <Link to="/Especialidades">  <li className='drop_li_of'><span><BsFillCaretRightFill /></span> Especialidades</li></Link> 
                        </ul>
                  </li>

                  <li className="nav_li">
                     <Link to="/Inscripciones" className="nav_router">
                        <span>Inscripciones</span>
                     </Link>
                  </li>

                  <li className="nav_li">
                        <Link to="/Desa" className="nav_router">
                        <span>Proyecto DESA</span>
                        </Link>
                  </li>

                  <li className="nav_li">
                  <Link to="/404" className="nav_router">
                        <span>Maestros</span>
                  </Link>
                  </li>

                  <li className="nav_li">
                  <Link to="/404" className="nav_router">
                        <span>Alumnos</span>
                  </Link>
                  </li>

                  <li className="nav_li">
                  <Link to="/Equipo-INNOVA" className="nav_router">
                        <span>Equipo INNOVA</span>
                  </Link>
                  </li>

                  <li className="nav_li">
                  <Link to="/Contacto" className="nav_router">
                        <span>Contacto</span>
                  </Link>
                  </li>
               </ul>



                {/*Tap Exit */}

               <div id='nav_exit' className='nav_exit' onClick={handleCloseMenu}>
               <CgClose  onClick={handleClickIcon1}/>
               </div>

            </div>

                {/*Tap Menu */}

            <div className="nav_tap" onClick={handleToggleMenu}>
            {visibleIcons.icon1 && (
            <CgFormatJustify onClick={handleClickIcon2} />
               )}
            </div>


         </nav>
        </div>
        </div>
    )
};

export default Nav;
