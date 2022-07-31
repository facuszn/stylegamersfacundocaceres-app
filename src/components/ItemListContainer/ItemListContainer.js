import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../FireBase/FireBase";

const ItemListContainer = ({ greeting }) => {
  const [juegos, setJuegos] = useState([]);
  console.log("juegos: ", juegos);
  const { categoryId } = useParams();
  console.log("catergoriaID: ", categoryId);

  useEffect(() => {
    getProducts(categoryId).then((snapshot) => {
      setJuegos(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        })
      );
    });
  }, [categoryId]);

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
