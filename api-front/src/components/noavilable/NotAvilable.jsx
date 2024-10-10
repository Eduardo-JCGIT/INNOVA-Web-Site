import Footer from "../global/Footer";
import React, { useEffect } from 'react';
import Nav from "../global/Nav";
import FoxAnimate from "../spring/animate/FoxAnimate";

const NotAvilable = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <Nav />
      </div>
      <section className="nav_top_padg_sep not_avilable_pag_cont container_global">
        <div>
          <h1>La página no está disponible. Estamos trabajando en su desarrollo. ¡Vuelve pronto!</h1>
        </div>
        <div>
          <FoxAnimate />
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NotAvilable;
