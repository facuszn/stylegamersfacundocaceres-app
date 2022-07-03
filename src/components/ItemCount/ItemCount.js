import { useState } from 'react';

function ItemCount({ stock, initial,  onAdd }) {
    const [count, setcount] = useState(initial);
    const incrementar = () => {
        setcount ((valAnt) => (valAnt < 7 ? count + 1 : count));
    };
    const decrementar = () => {
        setcount ((valAnt) => (valAnt > 0 ? count - 1 : count));
    };
  return (
    <div className="d-grid gap-2 d-md-block mt-5">
        <button className="btn btn-primary mx-2" type="button" onClick={decrementar}>-</button>
        {count}
        <button className="btn btn-primary mx-2" type="button" onClick={incrementar}>+</button>
        <button className="btn btn-primary mx-2" type="button"
            onClick={() => {
                count <= stock && onAdd(count);
            }}>Agregar al carrito</button>
    </div>

  );
};

export default ItemCount;