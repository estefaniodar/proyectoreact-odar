import React, { useState } from 'react'

export default function ItemCount({stock, addToCart}) {
    const [count, setCount] = useState(1);

    function suma(){ 
    if(count < stock) setCount(count + 1);   
    }
    function resta(){
    if (count > 1) setCount(count - 1);
    }

    return (
        <div style={{"maxWidth": "480px"}} className="container mt-4" >
            <h2>Comprar</h2>
            <div className="container">
                <button onClick={resta} type="button" className="btn btn-outline-primary">-</button>
                <span>{count}</span>
                <button onClick={suma} type="button" className="btn btn-outline-primary">+</button>
            </div>
            <div className="container">
                <div className="text-center d-flex flex-column">
                    <button onClick={()=>addToCart(count)} className="mt-4 btn btn-primary">Agregar al Carrito</button>
                    <small className="text-muted mt-2">Stock disponible: {stock}</small>
                </div>
            </div>
        </div>
    )
}

