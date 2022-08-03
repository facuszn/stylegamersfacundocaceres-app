import React from "react";
import "./CartList.css";

const CartList = ({ product, removeItem }) => {
  const { id, nombre, imagen, precio, quantity } = product;

  return (
    <tbody>
      <tr>
        <td>
          <img src={imagen} alt={nombre} className="cartImg" id="img" />
        </td>
        <td className="p-5">{nombre}</td>
        <td className="p-5">{quantity}</td>
        <td className="p-5">${precio}</td>
        <td className="p-5">${precio * quantity}</td>
        <td className="p-5">
          <button
            className="btn m-2"
            id="button-red"
            onClick={() => removeItem(id)}
          >
            Eliminar del carrito
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartList;
