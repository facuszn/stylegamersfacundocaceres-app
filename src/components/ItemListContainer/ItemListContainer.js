import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      {greeting}
      <ItemCount
      stock={7}
      initial={1}
      onAdd={(n) => alert(`Agregados ${n} productos`)}
      />
    </div>
  )
}

export default ItemListContainer