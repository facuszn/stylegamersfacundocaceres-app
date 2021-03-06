import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CategoryList from "./components/CategoryList/CategoryList";
import React from "react";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/cartContext/cartContext";
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
              element={
                <ItemListContainer greeting={"Bienvenidos a mi Tienda!"} />
              }
            />
            <Route path="/juego/:id" element={<ItemDetailContainer />} />
            <Route path="/categoria/:categoria" element={<CategoryList />} />
            <Route
              path="*"
              element={
                <ItemListContainer greeting={"Bienvenidos a mi Tienda!"} />
              }
            />
            <Route path="/carrito" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
