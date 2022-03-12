import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useContext} from "react";
import CartContext from '../Cont/CartContext';

function ItemDetail({item, nombre, imagen, precio, stock}) {
  const { addItem, clearCart }=useContext(CartContext);

  const [isInCart, setIsInCart]=useState(false)

  function addToCart(qty){
    addItem(item, qty);
    setIsInCart(true);
  }
  return (
    <div style={{"maxWidth": "480px"}} className="container mt-4">
        <h1>{nombre}</h1>
        <img src={imagen} alt={nombre}></img>
        <p class="display-1">$ {precio}</p>
        <p><small>Productos disponibles de primera calidad: {stock}</small></p>
        <hr/>
        {isInCart ?
          <button onClick={clearCart} className="mt-4 btn btn-danger">Terminar Compra</button>
          :
          <ItemCount addToCart={addToCart} stock={stock}/>
        }
          
          
        

    </div>

  )
}

export default ItemDetail