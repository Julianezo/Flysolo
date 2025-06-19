import { Component, useState } from 'react'; //me trae el hook usefect, esto lo podemos usar para hacer mas dinamico las componentes, ya que podemos a empzar  ajuagar que siu apretas una cosa cambia el estado entonces react renderixa otra componente
import { useLocation } from 'react-router-dom'; // este sirve para poder redirigir a difernetes partes de la pagana y cargar los componnetes que van a conformar esa parte de la pagina
import Navbar from "./Componentes/Navbar";
import Principal from './Componentes/Principal';
import HistorialViaje from './Componentes/HistorialViaje';
import Login from './Componentes/Login';
import './App.css';
function App() {
  return (
    <>
      <Login/>
    </>
  );
}

export default App;;
