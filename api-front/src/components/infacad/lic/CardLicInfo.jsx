import { BsDiamondFill } from "react-icons/bs";
import ObjInfLic from "./ObjInfLic";

function CardLicInfo() {
  return (
    <div>
      <h1 className="contact_ind_tittle col_txt_hd2 poppins-bold">
        PLAN DE <span className="col_txt_hd">ESTUDIO </span>
      </h1>



        <div className="header_cont_clm3">
          {/*Contendor de las cartas*/}
          {ObjInfLic.map((item) => ( 

          <div className="card_inf_grid_cont" key={item.idlicI}>
            {/*Carta individual y fondo de la imagen*/}
            <div className="card_container_info_pln txt_ption_pln_info">
              <h3>{item.c1} CUATRIMESTRE</h3>
              <br />
              <ul className="ul_list_info_card_acad">
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.I_li1}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.I_li2}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.I_li3}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.I_li4}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.I_li5}
                </li>
              </ul>
            </div>

            {/*------------------------------------------------------------------- */}
            <div className="card_container_info_pln txt_ption_pln_info">
              <h3>{item.c2} CUATRIMESTRE</h3>
              <br />
              <ul className="ul_list_info_card_acad">
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.II_li1}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.II_li2}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.II_li3}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.II_li4}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.II_li5}
                </li>
              </ul>
            </div>

            {/*------------------------------------------------------------------- */}
            <div className="card_container_info_pln txt_ption_pln_info">
              <h3>{item.c3} CUATRIMESTRE</h3>
              <br />
              <ul className="ul_list_info_card_acad">
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.III_li1}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.III_li2}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.III_li3}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.III_li4}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.III_li5}
                </li>
              </ul>
            </div>

            {/*------------------------------------------------------------------- */}
            <div className="card_container_info_pln txt_ption_pln_info">
              <h3>{item.c4} CUATRIMESTRE</h3>
              <br />
              <ul className="ul_list_info_card_acad">
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.IV_li1}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.IV_li2}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.IV_li3}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.IV_li4}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.IV_li5}
                </li>
              </ul>
            </div>

            {/*------------------------------------------------------------------- */}
            <div className="card_container_info_pln txt_ption_pln_info">
              <h3>{item.c5} CUATRIMESTRE</h3>
              <br />
              <ul className="ul_list_info_card_acad">
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.V_li1}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.V_li2}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.V_li3}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.V_li4}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.V_li5}
                </li>
              </ul>
            </div>

            {/*------------------------------------------------------------------- */}
            <div className="card_container_info_pln txt_ption_pln_info">
              <h3>{item.c6} CUATRIMESTRE</h3>
              <br />
              <ul className="ul_list_info_card_acad">
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VI_li1}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VI_li2}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VI_li3}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VI_li4}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VI_li5}
                </li>
              </ul>
            </div>

            {/*------------------------------------------------------------------- */}
            <div className="card_container_info_pln txt_ption_pln_info">
              <h3>{item.c7} CUATRIMESTRE</h3>
              <br />
              <ul className="ul_list_info_card_acad">
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VII_li1}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VII_li2}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VII_li3}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VII_li4}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VII_li5}
                </li>
              </ul>
            </div>

            {/*------------------------------------------------------------------- */}
            <div className="card_container_info_pln txt_ption_pln_info">
              <h3>{item.c8} CUATRIMESTRE</h3>
              <br />
              <ul className="ul_list_info_card_acad">
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VIII_li1}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VIII_li2}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VIII_li3}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VIII_li4}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.VIII_li5}
                </li>
              </ul>
            </div>

            {/*------------------------------------------------------------------- */}
            <div className="card_container_info_pln txt_ption_pln_info">
              <h3>{item.c9} CUATRIMESTRE</h3>
              <br />
              <ul className="ul_list_info_card_acad">
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.IX_li1}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.IX_li2}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.IX_li3}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.IX_li4}
                </li>
                <li className="li_list_info_card_acad">
                  <span>
                    <BsDiamondFill />
                  </span>
                  {item.IX_li5}
                </li>
              </ul>
            </div>
          </div>
            
            ))}

        </div>

    </div>
  );
}

export default CardLicInfo;
