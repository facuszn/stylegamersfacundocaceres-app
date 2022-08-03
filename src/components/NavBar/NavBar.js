import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="navbar navbar-expand-md navbar-light shadow-sm  mb-1 bg-light roundedsticky-top">
          <Link to="/">
            <div className="text-center">
              <h1 id="h1">
                <span>S</span>
                <span>T</span>
                <span>Y</span>
                <span>L</span>
                <span>E</span>
                <span> </span>
                <span>G</span>
                <span>A</span>
                <span>M</span>
                <span>E</span>
                <span>R</span>
                <span>S</span>
              </h1>
            </div>
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">
                <CartWidget />
              </Link>
            </li>
          </ul>
        </div>
        <ul className="nav">
          <li>
            <NavLink to="/category/deportes">Deportes</NavLink>
          </li>
          <li>
            <NavLink to="/category/aventura">Aventura</NavLink>
          </li>
          <li>
            <NavLink to="/category/accion">Accion</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
