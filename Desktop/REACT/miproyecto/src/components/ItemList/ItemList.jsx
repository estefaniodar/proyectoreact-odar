import React from 'react'
import Item from './Item'

function ItemList({data}) {
  return (
    <>
      <div className='card'>
        {data.map((item)=>{
            return <Item
                     key={item.id}
                     id={item.id}
                     nombre={item.nombre}
                     precio={item.precio}
                     stock={item.stock}
                     categoria={item.categoria}
                     imagen={item.imagen}
                    />
            
        
        })}
      </div>
    </>
  )
}

export default ItemList