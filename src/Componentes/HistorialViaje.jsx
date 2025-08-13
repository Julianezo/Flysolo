import { useEffect, useState } from 'react';
import '../Componentescss/HistorialViaje.css';

function HistorialViaje() {
  const [viajes, setViajes] = useState([]);
  const usuarioId = 123; // este sería el ID del pasajero, podrías sacarlo del contexto o login

useEffect(() => {
  const datosSimulados = [
    {
      id: 1,
      imagen: '/imagen1.jpg',
      destino: 'Córdoba',
      ubicacion: 'Buenos Aires',
      conductor: 'Juan Pérez',
      precio: 3000
    },
    {
      id: 2,
      imagen: '/imagen2.jpg',
      destino: 'Mendoza',
      ubicacion: 'Rosario',
      conductor: 'Ana López',
      precio: 4500
    }
  ];
  setViajes(datosSimulados);
  }, []);

  return (
    <div className="historial-container">
      <h2>Historial de Viajes</h2>
      {viajes.map((viaje) => (
        <div className="viaje-card" key={viaje.id}>
          <img src={viaje.imagen} alt="imagen del viaje" className="viaje-imagen" />
          <div className="viaje-detalles">
            <p><strong>Destino:</strong> {viaje.destino}</p>
            <p><strong>Ubicación:</strong> {viaje.ubicacion}</p>
            <p><strong>Conductor:</strong> {viaje.conductor}</p>
            <p><strong>Precio:</strong> ${viaje.precio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HistorialViaje;
