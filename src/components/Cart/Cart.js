import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import TableListContainer from "../TableListContainer/TableListContainer";
import Form from "../Form/Form";

const Cart = () => {
  const [idOrder, setIdOrder] = useState("");
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    repEmail: "",
  });
  const { cartList, removeItem, clearCart, totalPrice } = useCartContext();

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const getOrder = (e) => {
    e.preventDefault();
    let order = {
      buyer: dataForm,
      items: cartList.map((item) => {
        const id = item.id;
        const nombre = item.nombre;
        const precio = item.precio * item.quantity;
        const quantity = item.quantity;

        return { id, nombre, precio, quantity };
      }),
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((resp) => setIdOrder(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {
        clearCart();
        setDataForm({
          name: "",
          phone: "",
          email: "",
        });
      });
  };

  return (
    <div className="mt-5 text-center">
      {cartList.length < 1 ? (
        <div>
          <h1>No hay productos en el carrito</h1>
          <Link to="/">
            <button className="btn m-2" id="button">
              Volver al inicio
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <TableListContainer cartList={cartList} removeItem={removeItem} />
          <div>
            <button onClick={clearCart} className="btn m-2" id="button-red">
              Vaciar carrito
            </button>
            <h2 className="mt-3">Precio total: ${totalPrice()} </h2>
          </div>
          <Form
            handleChange={handleChange}
            getOrder={getOrder}
            dataForm={dataForm}
          />
        </div>
      )}
      <h2 className="order">
        {idOrder.length !== 0 && `ID de su orden: ${idOrder}`}
      </h2>
    </div>
  );
};

export default Cart;
