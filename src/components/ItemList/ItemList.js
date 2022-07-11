import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items}) => {
  return (
    <div className='row'>
        {items.map(({id, nombre, precio, anio, imagen}) => (
        <Item {... {id, nombre, precio, anio, imagen}}/>   
  ))}
  </div>
  );
};

export default ItemList;