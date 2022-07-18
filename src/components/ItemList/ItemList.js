import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items}) => {
  return (
    <div className='row'>
        {items.map((juego) => (
        <Item key={juego.id} juego={juego}/> 
 ))}
  </div>
  );
};
export default ItemList;