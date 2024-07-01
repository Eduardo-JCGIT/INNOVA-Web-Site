import React, { useState, useEffect } from "react";

const Time = () => {
  {/*Objeto para guardas las horas*/}

  const timeIndex = {
    days: 60,
    hours: 15,
    minute: 40,
    seconds: 29,
  };

  {/*Uso de UseState para la funcion del contador en reversa */}
  const [timeglobal, setTimeglobal] = useState(() => {
 const timeSave = JSON.parse(localStorage.getItem('timeglobal'));
 return timeSave || timeIndex;
});

  {/*Incremento del tiempo */}

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeglobal.days === 0 &&
        timeglobal.hours === 0 &&
        timeglobal.minute === 0 &&
        timeglobal.seconds === 0) {
        clearInterval(interval);
      } else {
        if (timeglobal.seconds > 0) {
          setTimeglobal(prevTime => ({...prevTime, seconds: prevTime.seconds -1}));
        } else {
          if (timeglobal.minute > 0) {
            setTimeglobal(prevTime =>({
              ...prevTime, 
              minute: timeglobal.minute - 1,
              seconds: 59,
            }));
          } else {
            if (timeglobal.hours > 0) {
              setTimeglobal(prevTime => ({
              ...prevTime,
                hours: timeglobal.hours - 1,
                minute: 59,
                seconds: 59,
              }));
            } else {
              if (timeglobal.days > 0) {
                setTimeglobal(prevTime =>({
                  ...timeglobal,
                  days: timeglobal.days - 1,
                  hours: 59,
                  minute: 59,
                  seconds: 59,
                }));
              }
            }
          }
        }
      }
    }, 1000);

    {/*Almacena el tiempo local en el componente*/} 
    return () => {clearInterval(interval);
    localStorage.setItem('timeglobal',
        JSON.stringify(timeglobal));
    };
  }, [timeglobal]);

  return( 
  
  <div>
  <h3 className='poppins-semibold'>Tiempo restante</h3>
  <p className='poppins-semibold'>Días: {timeglobal.days}, Horas: {timeglobal.hours}, Minutos: {timeglobal.minute}, Segundos: {timeglobal.seconds}</p>  
    {timeglobal.days === 0 &&
    timeglobal.hours === 0 &&
    timeglobal.minute === 0 &&
    timeglobal.seconds === 0 && (
        <p>Tiempo agotado</p>
    )}
  </div>
  )
};

export default Time;
