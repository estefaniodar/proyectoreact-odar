import React from 'react'
import { Link } from 'react-router-dom'

function Item({ id,nombre, precio, stock, imagen}) {
  return (
    <div>
        <h1>{nombre}</h1>
        <img src={imagen} alt={nombre}></img>
        <p>$ {precio}</p>
        <p><small>Productos disponibles de primera calidad: {stock}</small></p>
        <hr/>
        <Link to={`/item/${id}`}>
          ver detalle del producto
        </Link>

    </div>
  )
}

export default Item