import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useContext} from "react";
import CartContext from '../Cont/CartContext';
import {Link} from 'react-router-dom';


function ItemDetail({nombre, imagen, precio, stock}) {
  const { addItem}=useContext(CartContext);

  const [isInCart, setIsInCart]=useState(false)

  function addToCart(qty){
    addItem({nombre, imagen, precio, stock}, qty);
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
          <Link to="/Cart" type="button" className="mt-4 btn btn-warning">Terminar Compra</Link>
          :
          <ItemCount addToCart={addToCart} stock={stock}/>
        }
          
          
        

    </div>

  )
}

export default ItemDetail