import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import innova3png from '../../img/icon/innova3.png';
import { CgClose } from "react-icons/cg";
import { CgFormatJustify } from "react-icons/cg";
import { BsFillCaretRightFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiChevronRight } from "react-icons/ti";


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


 /*Sub Menu responsive */

 const [AvailableMenu, setAvailableMenu] = useState(false);
 const [isMobile, setIsMobile] = useState(false);

 // Detectar el tamaño de la pantalla para saber si es móvil o tablet
 useEffect(() => {
   const handleResize = () => {
     setIsMobile(window.innerWidth <= 1150);
   };

   handleResize(); // Verificar el tamaño de pantalla al cargar
   window.addEventListener('resize', handleResize); // Escuchar cambios en el tamaño de la pantalla

   return () => {
     window.removeEventListener('resize', handleResize);
   };

 }, []);

 const touchMenu = () => {
   if (isMobile) {
     setAvailableMenu(!AvailableMenu);
   }
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

                        <div className='dis_mobile_submenu' onClick={touchMenu} >
                        <span>Oferta Academica</span><span><RiArrowDropDownLine className={`icon_drop_submenu ${setAvailableMenu ? 'rotate' : ''}`}/></span> 
                        </div>
                        </div>
                        <ul className={`drop_nav_of submenu ${AvailableMenu ? 'active' : ''}`}>
                           <Link to="/Licenciaturas"> <li className='drop_li_of'><span><TiChevronRight /></span> Licenciaturas</li></Link> 
                           <Link to="/Maestrias"><li className='drop_li_of'><span><TiChevronRight /></span> Maestrías</li></Link> 
                           <Link to="/Doctorados"><li className='drop_li_of'><span><TiChevronRight /></span> Doctorados</li></Link>
                           <Link to="/Especialidades">  <li className='drop_li_of'><span><TiChevronRight /></span> Especialidades</li></Link> 
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
                  <Link to="/Mantenimiento" className="nav_router">
                        <span>Maestros</span>
                  </Link>
                  </li>

                  <li className="nav_li">
                  <Link to="/Mantenimiento" className="nav_router">
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