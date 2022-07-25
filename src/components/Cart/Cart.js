import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../cartContext/cartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const contexto = useContext(CartContext);
  const navigate = useNavigate();

  const finalizar = () => {
    navigate("/checkout");
  };

  if (contexto.pedido.length === 0) {
    return <div className="cart-empty">El carrito esta vacío</div>;
  } else {
    return (
      <>
        <div className="cart-list">
          {contexto.pedido.map((item, indice) => {
            return <CartItem item={item} key={indice} />;
          })}
        </div>
        <div className="cart-finalize-container">
          <div className="cart-total">TOTAL: ${contexto.montoTotalPedido}</div>
          <div className="cart-finalize">
            <button className="cart-finalize-button" onClick={finalizar}>
              Comprar
            </button>
          </div>
        </div>
      </>
    );
  }
};
export default Cart;
