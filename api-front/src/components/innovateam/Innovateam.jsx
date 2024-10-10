import Nav from "../global/Nav";
import Footer from "../global/Footer";
import ObjTeam from "./ObjTeam";
import { CgCloseO } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { AnimatedModalWrapper } from '../spring/animate/AnimatedModalWrapper'; // Asegúrate de ajustar la ruta

function InnovaTeam() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const [selectedItem, setSelectedItem] = useState(null);


  useEffect(() =>{
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return() =>{
      document.body.classList.remove('no-scroll');
    };

  }, [isModalOpen]);


  return (
    <div>

<header>
        <Nav />
</header>

      
 {/*----------------------------------------------------------------------------------------- */}

 <section className="container_global nav_top_padg_sep ft_nav_sep_pad con_box_hed_re">
        {/*-------------------------------------------------------------------------------------------- */}
        <div className="font_size_title_global col_txt_hd poppins-bold">
          <div className="clm_hd1 font_size_title_global">
            <h2>EQUIPO INNOVA</h2>
            <h3>C A M P E C H E</h3>
          </div>
        </div>
        <div className="card-adc-grid-cont">
          {ObjTeam.map((item) => (
            <div className="card_ind_dis_team" key={item.idteam}  onClick={() => openModal(item)}>
              <img src={item.imgteam} alt={item.imgteam} />
              <div className="admin_coor_inv_txt">
                <h2>{item.name}</h2>
                <h3>{item.area}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*-------------------------------------------------------------------------------------------- */}

      {openModal && (


      <AnimatedModalWrapper isOpen={isModalOpen}>
              <div >
        <div className="modal_cont_inf_team">
        <span className="close" onClick={closeModal}><span><CgCloseO /></span></span> 
      
      {openModal && selectedItem && (

        <div className="admin_text">
                  <img src={selectedItem.imgteam2} alt={selectedItem.imgteam2} />
                  <div className="text_cont_ind">
                    <h3>{selectedItem.hi}</h3>
                    <br />
                    <p>{selectedItem.journaling}</p>
                    <br />
                    <p className="grd_acad_team">{selectedItem.degree}</p>
                    <p>{selectedItem.area}</p>
                    <br />
                    <ul>
                      <li><span><SiGmail /></span>{selectedItem.email}</li>
                      <li><span><RiWhatsappFill /></span>{selectedItem.phone}</li>
                    </ul>
                  </div>
          </div>

     )}
               </div>
               </div>

      </AnimatedModalWrapper>



      )}


      <div>
        <Footer/>
      </div>


    </div>
  );
}

export default InnovaTeam
