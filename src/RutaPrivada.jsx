import { Navigate } from 'react-router-dom';

export default function RutaPrivada({ children, logueado }) {
  return logueado ? children : <Navigate to="/login" />;
}
