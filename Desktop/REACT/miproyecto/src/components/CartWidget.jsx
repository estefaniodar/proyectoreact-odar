import React from 'react'
import { Link } from 'react-router-dom';
import miCarrito from '../imagenes/carrito.png';
import {useContext} from "react";
import CartContext from "./Cont/CartContext"


function CartWidget() {
  const {countItemsinCart}=useContext(CartContext);
  return (
    <>
      <div className='d-flex'>
        <Link to="/Cart" className='px-1'>
          <img src={miCarrito} alt='carrito.png' height="30" width="30"></img>
        </Link>
        {
          countItemsinCart()>0 && <small>{countItemsinCart()}</small>
        }   
      </div>
    </>
  )
}

export default CartWidget