import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Componentescss/Principal.css";



//En export default va la logica del componente
export default function Login({ setLogueado }) {
  const [usuario, setUsuario] = useState("");   //se usan estos use state para que se actualizar la pantalla del fron
  const [contrasena, setContrasena] = useState("");

  const navigate = useNavigate(); // con esto nos movemos por las rutas

  const handleLogin = async (e) => {   //handle login se ejecuta cuando se envia el formulario
    e.preventDefault();

    try {  //mandamos la peticion al sevidor
      const respuesta = await fetch("http://localhost:3000/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ usuario, contrasena })
      });

      if (!respuesta.ok) {
        throw new Error("Credenciales incorrectas");
      }

      const data = await respuesta.json();

      if (data.success) {
        setLogueado(true);             
        navigate("/Principal");      
      } else {
        alert("Login fallido");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Hubo un problema al iniciar sesión");
    }
  };

  return (
    <div className="form-container">
      <h1 className="titulo">Bienvenido a Flysolo!</h1>
      <form className="form-box" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}  //funcion que se activa cuando hacmeo un input y se lo pasa al estado setusuraio para que vaya actualizando y se vaya mostrando
          className="input-field"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
