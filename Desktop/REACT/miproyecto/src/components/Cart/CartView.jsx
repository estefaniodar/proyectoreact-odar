import React from 'react'
import {useContext} from "react";
import { Link } from 'react-router-dom';
import CartContext from '../Cont/CartContext';

function CartView() {
    const {removeItem, itemsCart, clearCart }= useContext(CartContext);

  if ( itemsCart.lenght === 0 ){
      return(
          <div className='container'>
              <h2>No hay elementos en el carrito</h2>
              <p>Te invitamos a elegir nuestros productos</p>
              <Link type="button" className='btn btn-primary' to="/">Ir al catalogo</Link>
          </div>
      
      )
  }
  else{
      return (
          <div className='container'>
              <h1>Carrito de Compras</h1>
              <table className='table'>

                  <thead>
                      <tr>
                          <th>nombre</th>
                          <th>precio</th>
                          <th>cantidad</th>
                          <th>total</th>
                          <th>Eliminar</th>
                      </tr>
                  </thead>
                  <tbody>
                        {
                        itemsCart.map(item =>{
                            return <tr key={item.id}>
                                <td>{item.nombre}</td>
                                <td>{item.precio}</td>
                                <td>{item.qty}</td>
                                <td>${(item.qty * item.precio).toFixed(2)}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=> removeItem(item.id)}>Eliminar</button>
                                </td>
                            </tr> 

                        }  
                            )
                        }
                      
                  </tbody>
              </table>
              <button onClick={clearCart} className="btn btn-danger"> Vaciar Carrito</button>
          </div>
      )
  }
}

export default CartView