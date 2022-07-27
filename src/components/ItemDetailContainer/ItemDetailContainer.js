import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../FireBase/FireBase";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [juegos, setJuegos] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    getProductById(id)
    .then((product) => setJuegos(product))
    .catch((error) => {
      console.log(error);
    });
    }, [id]);

  return (
    <div className="container">
      <ItemDetail juegos={juegos} />
    </div>
  );
};
export default ItemDetailContainer;
