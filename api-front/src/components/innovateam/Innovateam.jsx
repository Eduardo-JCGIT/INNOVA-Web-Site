import Nav from "../global/Nav";
import Footer from "../global/Footer";
import ObjTeam from "./ObjTeam";
import item2 from "../../img/innova_team_img/modal/mich_tagle.jpg";
import { useEffect, useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";

function Innovateam() {

  /*Funcion del modal*/
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const ToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() =>{
    if (modalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return() =>{
      document.body.classList.remove('no-scroll');
    };

  }, [modalOpen]);




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

      {/*Este es el modal de las cartas separado en 2 secciones */}

      {/*Caja moaal de cada card */}
      {modalOpen && (

        <section className="modal_team_inv">
          <div onClick={ToggleModal} className="overlay_modal_team"></div>
          <div className="modal_cont_inf_team">
          <span className="bx bx-x close" onClick={ToggleModal}><span><CgCloseO /></span></span> 

          {modalOpen && selectedItem && (
          <div className="admin_text">
                  <img src={selectedItem.imgteam} alt={selectedItem.imgteam} />
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
        </section>
      )}
    
      {/*----------------------------------------------------------------------------------------- */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Innovateam;
