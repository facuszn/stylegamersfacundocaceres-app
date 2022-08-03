import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ product }) => {
  const { id, nombre, imagen, categoria, precio, anio, stock } = product;

  return (
    <article>
      <div className="card m-1" style={{ width: "18rem" }}>
        <img src={imagen} alt={nombre} className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">
            {nombre} <br /> {anio}
          </h4>
          <h3 className="card-title category">{categoria}</h3>
          <h5 className="card-text">Precio: $ {precio}</h5>
          <p className="card-text">Stock: {stock} unidades</p>
          <Link to={`/item/${id}`}>
            <button className="btn" id="button">
              Detalle de producto
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Item;
