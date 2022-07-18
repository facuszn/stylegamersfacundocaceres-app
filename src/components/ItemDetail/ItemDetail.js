import React from 'react';


const ItemDetail = ({ juegos }) => {
    const {nombre, precio, anio, categoria, descripcion, imagen} = juegos;

    return (
      <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imagen} className="img-fluid rounded-start" alt={nombre} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{nombre} Año: {anio} Categoria: {categoria} </h5>
      <h5 className="card-title">$ {precio}</h5>
            <p className="card-text">{descripcion}</p>
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
    </div>
      );
    };

export default ItemDetail;