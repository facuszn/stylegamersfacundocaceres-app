import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [cart, setCart] = useState(true);

  const { addItem } = useCartContext();

  const { id, nombre, descripcion, imagen, precio, stock } = item;

  const onAdd = (count) => {
    setCart(false);
    addItem({ ...item, quantity: count });
  };

  return (
    <div key={id} className="container">
      <div className="row mt-5">
        <div className="imgDetail">
          <img src={imagen} alt={nombre} />
        </div>
        <div>
          <h3 className="titleDetail">{nombre}</h3>
          <p>{descripcion}</p>
          <h4 className="priceDetail">${precio}</h4>
          {cart ? (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          ) : (
            <Link to="/cart">
              <button className="btn m-2" id="button">
                Ir al carrito
              </button>
            </Link>
          )}
        </div>
      </div>
      <Link to="/">
        <button className="btn m-2" id="button-red">
          Seguir Comprando
        </button>
      </Link>
    </div>
  );
};

export default ItemDetail;
