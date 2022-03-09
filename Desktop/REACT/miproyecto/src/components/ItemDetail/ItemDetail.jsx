import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({nombre, precio, stock, imagen}) {
  return (
    <div style={{"maxWidth": "480px"}} className="container mt-4">
        <h1>{nombre}</h1>
        <img src={imagen} alt={nombre}></img>
        <p class="display-1">$ {precio}</p>
        <p><small>Productos disponibles de primera calidad: {stock}</small></p>
        <hr/>
        
          <ItemCount initial={1} stock={stock}/>
        

    </div>

  )
}

export default ItemDetail