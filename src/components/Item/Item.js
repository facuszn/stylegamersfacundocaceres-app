import React from 'react'
import { Link } from 'react-router-dom';
//import { Link } from "react-router-dom";

const Item = ({ juego }) => {
  const {id, nombre, precio, anio, imagen} = juego;

return (
  <div className="col-md-3 my-2">
  
    
    <div className="card">
        <img src={imagen} className="card-img-top" alt={nombre} />
    <div className="card-body">
      <h5 className="card-title">
        {nombre} <br />
        {anio}
      </h5>
      <p className="card-text">
        $ {precio}
      </p>
      <Link to={"juego/" + id}>
      <a
        href="index.html"
        className="btn btn-primary"
        id="button"
        title="Ver detalles">
        Ver detalles
      </a>
      </Link>
    </div>
    </div>
     
    </div>
     
  );
};

export default Item;