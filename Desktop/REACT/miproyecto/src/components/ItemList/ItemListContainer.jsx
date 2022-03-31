import React, { useEffect } from 'react'
import { useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getAllProducts, getAllProductsFrom } from '../firebase';


export default function ItemListContainer(props) {
  let {categoryid} = useParams();

  const [items, setItems] = useState([]);

    useEffect(
    () =>{
      const result = categoryid? getAllProductsFrom(categoryid) : getAllProducts();

        result.then(itemsPromise =>{
        setItems(itemsPromise)
        console.log(itemsPromise);
        })
        .finally(() =>{
        console.log("termino")
      })

     },
     [categoryid]
     );
      
  return (
    <div>
      <h1>{props.greeting}</h1>
      <section className='container'>
        <ItemList data={items}/>
      </section>
    </div>
  )
}

