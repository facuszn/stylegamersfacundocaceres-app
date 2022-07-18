import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
//import ItemCount from '../ItemCount/ItemCount';
import juegos from '../../juegos.json';
import ItemDetail from '../ItemDetail/ItemDetail';

const getData = new Promise((resolve, reject) => {
  
  let afterPromises = true;  
  setTimeout(() => {
    if (afterPromises) {
      resolve(juegos); 
  } else {  
  reject("Failed to get data");  
  }
  }, 2000);
  });
  
const ItemDetailContainer = () => {
  let params = useParams();
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    getData
      .then((data) => {
      setJuegos(data[params.id - 1]);
      })
      .catch((err) => {
      console.log(err);
      });
  }, [params.id - 1]);
  return (
    <div className='container'>
      <ItemDetail juegos={juegos} />
    </div>   
  );
}
export default ItemDetailContainer;


