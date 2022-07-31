import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/cartContext/cartContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import React from "react";
import Cart from "./components/Cart/Cart";
import "./App.css";


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <ItemListContainer greeting={"Bienvenidos a mi Tienda!"} />
              }
            />
            <Route 
              path="/juego/:id"
              exact
              element={<ItemDetailContainer />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer greeting={"ESTOY EN CATEGORIAS"} />} />
            <Route
              path="*"
              exact
              element={
                <ItemListContainer greeting={"Bienvenidos a mi Tienda!"} />
              }
            />
            <Route
              path="/carrito"
              exact
              element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
