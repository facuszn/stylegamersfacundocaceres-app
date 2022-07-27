import React from 'react'
import { Link, NavLink } from "react-router-dom";
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
          <ul className="navbar-brand">
            <h2>Style Gamers Shop</h2>
          </ul>
        </Link>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav navi px-2">
            <Link to="/">
              <ul className="nav-link active" aria-current="page">
                Inicio
              </ul>
            </Link>
            <Link to="/">
            <ul className="nav-link active" aria-current="page">
              Sobre Nosotros
              </ul>
            </Link>
            <Link to="/">
            <ul className="nav-link active" aria-current="page">
              FAQs
              </ul>
            </Link>
            <Link to="/">
            <ul className="nav-link active" aria-current="page">
              Contacto
              </ul>
            </Link>
            <ul className="nav-item dropdown navi" aria-current="page">
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
              <NavLink to={"/categoria/deportes"}>
                  <li>
                    <div className="dropdown-item">Deportes</div>
                  </li>
              </NavLink>
                <NavLink to={"categoria/aventura"}>
                  <li>
                    <div className="dropdown-item">Aventura</div>
                  </li>
                </NavLink>
                <NavLink to={"categoria/accion"}>
                  <li>
                    <div className="dropdown-item">Acción</div>
                  </li>
                </NavLink>
              </ul>
            </ul>
          </div>
        </div>
        <Link to={"/carrito"}>
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;

