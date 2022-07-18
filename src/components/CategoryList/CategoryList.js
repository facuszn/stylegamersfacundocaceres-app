import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
//import ItemCount from '../ItemCount/ItemCount';
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
  

const CategoryList = ({ greeting }) => {
  let params = useParams();
  const [juegos, setJuegos] = useState([]);
  useEffect(() => {
    getData
    .then((data) => {
    setJuegos(data[params.categoria]);
    })
    .catch((err) => {
    console.log(err);
    });
    }, [params.categoria]);
  return (
    <div>
      {greeting}
      <div className='container'><ItemList items={juegos} /></div>
    </div>
   
   /*<ItemCount
      stock={7}
      initial={1}
      onAdd={(n) => alert(`Agregados ${n} productos`)}
      />
      <ItemList items={juegos} />*/
  )
}
export default CategoryList;