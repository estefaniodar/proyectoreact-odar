import React, { useState } from 'react'

function ItemCount() {
    const [count, setCount] = useState(1);

    return (
        <div style={{"maxWidth": "480px"}} className="container mt-4" >
            <h2>Comprar</h2>
            <div className="container">
                <button>-</button>
                <span>{count}</span>
                <button>+</button>
            </div>
            <button className="btn btn-danger mt-2">Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount