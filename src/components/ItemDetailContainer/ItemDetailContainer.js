import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';
import juegos from '../../juegos.json';


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

  const ItemDetailContainer = (items) => {
    const [juegos, setJuegos] = useState([]);
    useEffect(() => {
      getData
      .then((data) => {
      setJuegos(data);
      })
      .catch((err) => {
      console.log(err);
      });
      }, []);
      console.log(juegos)
    return (
    
     <div className='container'><ItemList items={juegos}/></div>
    )
  }  


export default ItemDetailContainer


