import React, {useEffect, useState} from 'react';
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

const ItemListContainer = ({ greeting }) => {
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
  return (
    <div>
      {greeting}
      <div className="container">
        <ItemList items={juegos} />
      </div>
    </div>
  );
};
export default ItemListContainer;