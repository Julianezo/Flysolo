// src/components/Navbar.jsx
// src/components/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className="navbar">
        <div className="navbar-header">
          <h1 className="logo">FlySolo</h1>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        {/* Renderizamos el menú siempre y alternamos la clase "open" */}
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li><button className="nav-button">Queres ser conductor?</button></li>
          <li><button className="nav-button">Viajes Recientes</button></li>
          <li><button className="nav-button">Perfil</button></li>
        </ul>
      </nav>

)};

export default Navbar;