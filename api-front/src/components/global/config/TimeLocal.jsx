import React, { useState, useEffect } from 'react';

const TimeLocal = () => {
  const fechaObjetivo = new Date('2024-09-03T00:00:00Z');

  const [tiempoRestante, setTiempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const fetchCurrentTime = async () => {
      try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/America/Mexico_City');
        const data = await response.json();
        const fechaActual = new Date(data.utc_datetime);
        actualizarTiempoRestante(fechaActual);
      } catch (error) {
        console.error('Error al obtener la hora actual:', error);
      }
    };

    fetchCurrentTime();

    const intervalo = setInterval(() => {
      fetchCurrentTime();
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const actualizarTiempoRestante = (fechaActual) => {
    const diferencia = fechaObjetivo - fechaActual;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    setTiempoRestante({ dias, horas, minutos, segundos });
  };

  return (
    <div>
      <h1>Cronómetro</h1>
      <p>Tiempo restante hasta el 3 de septiembre:</p>
      <p>{tiempoRestante.dias} días {tiempoRestante.horas} horas {tiempoRestante.minutos} minutos {tiempoRestante.segundos} segundos</p>
      {tiempoRestante.dias === 0 &&
       tiempoRestante.horas === 0 &&
       tiempoRestante.minutos === 0 &&
       tiempoRestante.segundos === 0 && (
        <p>¡El tiempo se ha agotado!</p>
      )}
    </div>
  );
};

export default TimeLocal;
