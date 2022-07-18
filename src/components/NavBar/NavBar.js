import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light shadow-sm  mb-1 bg-body roundedsticky-top">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    {/*Logo*/}
    <Link to="/">
    <a className="navbar-brand" href="index.html">
      <h2>Style Gamers Shop</h2>  
    </a>
    </Link>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarNavAltMarkup"
    >
      <div className="navbar-nav navi px-2">
        <a className="nav-link active" aria-current="page" href="index.html">
          Inicio
        </a>
        <a className="nav-link" href="index.html">
          Sobre Nosotros
        </a>
        <a className="nav-link" href="index.html">
          Carrito de Compras
        </a>
        <a className="nav-link" href="index.html">
          FAQs
        </a>
        <a className="nav-link" href="index.html">
          Contacto
        </a>
        <li className="nav-item dropdown">
    <li
      className="nav-link dropdown-toggle"
      id="navbarDropdown"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="true"
    >
      Categorias
    </li>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <Link to={"categorias/deportes"}>
      <li>
        
          Deportes
        
      </li>
    </Link>
    <Link to={"categorias/aventura"}>  
      <li>
        
          Aventura
        
      </li>
      </Link>
      <Link to={"categorias/accion"}> 
      <li>

          Accion

      </li>
      </Link>
    </ul>
    </li>
      </div>
    </div>
    <CartWidget />
  </div>
</nav>
    )
};
export default NavBar;
