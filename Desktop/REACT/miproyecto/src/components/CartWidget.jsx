import React from 'react'
import miCarrito from '../imagenes/carrito.png';


function CartWidget() {
  return (
    <>
      <img src={miCarrito} alt='carrito.png' height="30" width="30"></img>
      <small>3</small>
    </>
  )
}

export default CartWidget