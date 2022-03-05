import React from 'react'


function ItemDetail({nombre, precio, stock, imagen}) {
  return (
    <div>
        <h1>{nombre}</h1>
        <img src={imagen} alt={nombre}></img>
        <p>$ {precio}</p>
        <p><small>Productos disponibles de primera calidad: {stock}</small></p>
        <hr/>

    </div>
  )
}

export default ItemDetail