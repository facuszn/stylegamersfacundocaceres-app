import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../cartContext/cartContext";
//import { Link } from "react-router-dom";

const ItemDetail = ({ juegos }) => {
  const { nombre, precio, anio, categoria, descripcion, imagen } = juegos;
  const [cantidad, setCantidad] = useState(1);
  const contexto = useContext(CartContext);
  const Navigate = useNavigate();
  const actualizarCantidad = (valor) => {
    setCantidad(valor);
  };
  const comprar = () => {
    contexto.agregarItem(juegos, cantidad);
    Navigate("/carrito");
  };

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
            <div className="mt-5 pt-5 mr-5 text-end">
              <ItemCount
                initial={1}
                min={1}
                max={7}
                onAdd={actualizarCantidad}
              />
              <button
                className="btn btn-primary mx-2 text-center"
                onClick={comprar}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
