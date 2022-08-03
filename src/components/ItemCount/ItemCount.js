import React from "react";
import { useCounter } from "../../useCounter/useCounter";

const ItemCount = ({ stock, initial, onAdd }) => {
  const { counter, handleSubtract, handleAdd } = useCounter(initial, stock);

  return (
    <div className="container">
      <div className="main_item_count">
        <div className="item_count">
          <button onClick={handleSubtract} className="btn m-2 " id="button">
            -
          </button>
          <span>{counter}</span>
          <button onClick={handleAdd} className="btn m-2" id="button">
            +
          </button>
        </div>

        <p>Stock disponible: {stock - counter}</p>

        <button onClick={() => onAdd(counter)} className="btn m-2" id="button">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
