import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useContext} from "react";
import CartContext from '../Cont/CartContext';

function ItemDetail({item, nombre, imagen, precio, stock}) {
  const { addItem, clearCart }=useContext(CartContext);

  function addToCart(qty){
    addItem(item, qty);
  }
  return (
    <div style={{"maxWidth": "480px"}} className="container mt-4">
        <h1>{nombre}</h1>
        <img src={imagen} alt={nombre}></img>
        <p class="display-1">$ {precio}</p>
        <p><small>Productos disponibles de primera calidad: {stock}</small></p>
        <hr/>
        
          <ItemCount addToCart={addToCart} stock={stock}/>
          <button onClick={clearCart} className="mt-4 btn btn-danger">Vaciar Carrito</button>
        

    </div>

  )
}

export default ItemDetail