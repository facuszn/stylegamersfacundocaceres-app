import React from 'react'
import cart from './cart.svg'

const CartWidget = () => {
  return (
    <button className="btn btn-secundary p-0">
        <img src={cart} alt="Carrito" width={22} title="Ir al carrito" />
    </button>
  )
}

export default CartWidget