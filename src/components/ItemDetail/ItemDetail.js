import React from 'react'

const ItemDetail = ({ juego1 }) => {
    const {nombre, precio, anio, genero, descripcion, imagen} = juego1;

    return (
        <div className="col-md-10 my-2">
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
          <p className="card-text">
            {genero}
          </p>
          <p className="card-text">
            {descripcion}
          </p>

          <a
            href="index.html"
            className="btn btn-primary"
            id="button"
            title="Añadir al carrito">
            Añadir al carrito
          </a>
        </div>
        </div>
        </div>
      );
    };

export default ItemDetail;