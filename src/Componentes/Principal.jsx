import React, { useState } from "react";
import "../Componentescss/Principal.css";


export default function TravelForm() {
  const [destination, setDestination] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Destino:", destination);
    console.log("Ubicación:", location);
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Destino"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          PEDIR
        </button>
      </form>
    </div>
  );
}