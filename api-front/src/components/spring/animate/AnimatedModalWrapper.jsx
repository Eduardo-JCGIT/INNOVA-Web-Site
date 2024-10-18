import React from 'react';
import { useTransition, animated } from '@react-spring/web';
import '../Animate.css';

export const AnimatedModalWrapper = ({ isOpen, onClose, children }) => {
  const transitions = useTransition(isOpen, {
    from: { opacity: 0, transform: 'translateY(-50%) scale(0.8)' },
    enter: { opacity: 1, transform: 'translateY(0%) scale(1)' },
    leave: { opacity: 0, transform: 'translateY(100%) scale(0.8)' },  // Deslizar hacia abajo al salir
    config: { tension: 300, friction: 20, mass: 1 },
  });

  const backdropTransitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 }, // Duración del desvanecimiento
  });

  return backdropTransitions(
    (style, item) =>
      item && (
        <animated.div
          style={style}
          className="modal-backdrop"
          onClick={onClose} // Cerrar modal al hacer clic en el fondo
        >
          {transitions(

            (modalStyle, modalItem) =>

              modalItem && (
                <animated.div style={modalStyle} >
                  {children} {/* Aquí se renderiza el contenido del modal */}
                </animated.div>
              )
          )}
        </animated.div>
      )
  );
};
