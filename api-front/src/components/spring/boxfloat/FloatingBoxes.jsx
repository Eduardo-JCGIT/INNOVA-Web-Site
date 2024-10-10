import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import "../Animate.css"// Asegúrate de ajustar la ruta del archivo CSS
import { CgMonday } from "react-icons/cg";

export default function FloatingBoxes() {
    const floatingAnimation = useSpring({
      loop: true,
      to: [
        { transform: 'translateY(-30px)' },
        { transform: 'translateY(0px)' },
      ],
      from: { transform: 'translateY(0px)' },
      config: { duration: 1000 },
    });
  
    return (
      <div className="boxes-container">
        <animated.div style={floatingAnimation} className="box">
        <span><CgMonday className='Cg_color_item3'/>  </span> Estrategias pedagógicas innovadoras
        </animated.div>
        <animated.div
          style={{
            ...floatingAnimation,
            transform: floatingAnimation.transform.to(
              (value) => `translateY(${value.replace('0px', '-20px')})`
            ),
          }}
          className="box higher-box"
        >
          <p><span><CgMonday className='Cg_color_item3'/>  </span> Manejo de la diversidad en el aula</p>
        </animated.div>
        <animated.div style={floatingAnimation} className="box">
          <p><span><CgMonday className='Cg_color_item3'/>  </span> Técnicas de apoyo socioemocional</p>
        </animated.div>
      </div>
    );
  }