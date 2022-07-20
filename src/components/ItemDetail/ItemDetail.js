import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ juegos }) => {
  const { nombre, precio, anio, categoria, descripcion, imagen } = juegos;

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img src={imagen} className="img-fluid rounded-start" alt={nombre} />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h3 className="card-title">{nombre}</h3>
            <h6 className="card-title text-start">Año: {anio}</h6>
            <h6 className="card-title text-start">Categoria: {categoria}</h6>
            <h6 className="card-title text-start">Precio: $ {precio}</h6>
            <h6 className="card-title text-start">Descripción:</h6>
            <p className="card-text text-start">{descripcion}</p>
            <Link to="/carrito">
              <div className="mt-5 pt-5 mr-5 text-end">
                <ItemCount
                  stock={7}
                  initial={1}
                  onAdd={(n) => alert(`Agregados ${n} productos`)}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
