import React from 'react'
import Item from './Item'

function ItemList({data}) {
  return (
    <>
        {data.map((item)=>{
            return <Item
                     nombre={item.nombre}
                     precio={item.precio}
                     stock={item.stock}
                     imagen={item.imagen}
                    />
            
        
        })}
    </>
  )
}

export default ItemList