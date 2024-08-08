import Nav from "../global/Nav";
import Footer from "../global/Footer";
import ObjTeam from "./ObjTeam";
import item2 from "../../img/innova_team_img/mich_tagle.png";


function Innovateam() {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <section className="container_global nav_top_padg_sep ft_nav_sep_pad con_box_hed_re">
        <div className="font_size_title_global col_txt_hd poppins-bold">
        <div className="clm_hd1 font_size_title_global">
            <h2>EQUIPO INNOVA</h2>
            <h3>C A M P E C H E</h3>
            </div>
        </div>
<div className="card-adc-grid-cont">
{ObjTeam.map((item) => (
        <div className="card_ind_dis_team" key={item.idteam}>
        <img src={item.imgteam} alt={item.imgteam} />
        <div className="admin_coor_inv_txt">
        <h2>{item.name}</h2>
        <h3>{item.area}</h3>
        </div>
        </div>
))}
</div>

{/*Caja model de cada card */}

<div className="outer_card_cont">
<div className="box_card_st">
<i className="bx bx-x close">x</i>
<div className="admin_text">
<img src={item2} alt={item2} />
<div className="text_cont_ind">
<h5>¡Hola a todos! Me llamo Adriana Berenice</h5>
<p>
En mi día a día, administro las cuentas de los estudiantes, gestionando pagos de matrículas y becas. También envío recordatorios de pagos pendientes y proporciono informes financieros claros y precisos.</p>
</div>
</div>
</div>
</div>

      </section>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Innovateam;