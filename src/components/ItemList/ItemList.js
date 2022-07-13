import React from 'react';
import Item from '../Item/Item';
//import ItemDetail from '../ItemDetail/ItemDetail';

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