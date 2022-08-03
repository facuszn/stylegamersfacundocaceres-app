import React from "react";
import CartList from "../CartList/CartList";

const TableListContainer = ({ cartList, removeItem }) => {
  return (
    <div className="container">
      <table className="table caption-top mb-5">
        <thead>
          <tr>
            <th scope="col" className="text-center ">
              Imagen
            </th>
            <th scope="col" className="text-center ">
              Nombre del juego
            </th>
            <th scope="col" className="text-center">
              Cantidad
            </th>
            <th scope="col" className="text-center">
              Precio
            </th>
            <th scope="col" className="text-center">
              Subtotal
            </th>
            <th scope="col" className="text-center">
              Remover item
            </th>
          </tr>
        </thead>
        {cartList.map((product) => (
          <CartList
            product={product}
            key={product.id}
            removeItem={removeItem}
          />
        ))}
      </table>
    </div>
  );
};

export default TableListContainer;
