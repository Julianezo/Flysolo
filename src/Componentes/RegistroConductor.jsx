import React, { useState, useEffect } from "react";
import '../Componentescss/RegistroConductor.css';

const RegistroConductor = () => {
  const [formulario, setFormulario] = useState({
    usuario: "",
    contraseña: "",
    nombre: "",
    apellido: "",
    tipoAuto: "",
    patente: "",
  });

  const [tiposAutos, setTiposAutos] = useState([]);

  useEffect(() => {
    const obtenerTiposAutos = async () => {
      try {
        const respuesta = await fetch("http://localhost:3000/autos");
        const data = await respuesta.json();
        setTiposAutos(data);
      } catch (error) {
        console.error("Error al cargar tipos de autos:", error);
      }
    };

    obtenerTiposAutos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch("http://localhost:3000/registro-conductor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formulario),
      });

      if (respuesta.ok) {
        alert("Registro exitoso 🎉");
        setFormulario({
          usuario: "",
          contraseña: "",
          nombre: "",
          apellido: "",
          tipoAuto: "",
          patente: "",
        });
      } else {
        alert("Error en el registro");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-registro">
      <h2 style={{ color: 'black' }}>Registro de Conductor</h2>

      <input
        type="text"
        name="usuario"
        placeholder="Usuario"
        value={formulario.usuario}
        onChange={(e) => setFormulario({ ...formulario, usuario: e.target.value })}
        className="input-registro"
        required
      />

      <input
        type="password"
        name="contraseña"
        placeholder="Contraseña"
        value={formulario.contraseña}
        onChange={(e) => setFormulario({ ...formulario, contraseña: e.target.value })}
        className="input-registro"
        required
      />

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formulario.nombre}
        onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
        className="input-registro"
        required
      />

      <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        value={formulario.apellido}
        onChange={(e) => setFormulario({ ...formulario, apellido: e.target.value })}
        className="input-registro"
        required
      />

      <select
        name="tipoAuto"
        value={formulario.tipoAuto}
        onChange={(e) => setFormulario({ ...formulario, tipoAuto: e.target.value })}
        className="input-registro"
        required
      >
        <option value="">Seleccionar tipo de auto</option>
        {tiposAutos.map((tipo, i) => (
          <option key={i} value={tipo}>
            {tipo}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="patente"
        placeholder="Patente"
        value={formulario.patente}
        onChange={(e) => setFormulario({ ...formulario, patente: e.target.value })}
        className="input-registro"
        required
      />

      <button type="submit" className="boton-registro">Registrarse</button>
    </form>
  );
};

export default RegistroConductor;
