import { useState } from 'react';
import Navbar from "./Componentes/Navbar";
import Principal from './Componentes/Principal';
import HistorialViaje from './Componentes/HistorialViaje';
import Login from './Componentes/Login';
import RutaPrivada from "./RutaPrivada";  
import { Route, Routes, Navigate } from 'react-router-dom'; 
import RegistroConductor from './Componentes/RegistroConductor';

function App() {
  const [logueado, setLogueado] = useState(false);

  return (
    <Routes> 
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/RegistroConductor" element={<RegistroConductor/>} />
      <Route path="/login" element={<Login setLogueado={setLogueado} />} /> 
      <Route path="/Principal" element={<RutaPrivada logueado={logueado}><><Navbar /><Principal /></></RutaPrivada>} />
      <Route path="/Historial" element={<RutaPrivada logueado={logueado}><><Navbar /><HistorialViaje /></></RutaPrivada>} />
      <Route path="/Perfil" element={<RutaPrivada logueado={logueado}><><Navbar /><HistorialViaje /></></RutaPrivada>} />
      <Route path="Conductor" element={<RutaPrivada logueado={logueado}><><Navbar /><HistorialViaje /></></RutaPrivada>} />
    </Routes>
  );
}

export default App;
