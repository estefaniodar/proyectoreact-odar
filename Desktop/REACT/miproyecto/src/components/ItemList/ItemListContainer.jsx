import React, { useEffect } from 'react'
import { useState } from 'react';
import ItemList from './ItemList';

const BaseData =[{
  "id": 1,
  "imagen": "http://dummyimage.com/125x100.png/5fa2dd/ffffff",
  "nombre": "Keylex",
  "precio": 6079,
  "stock": 166
}, {
  "id": 2,
  "imagen": "http://dummyimage.com/158x100.png/5fa2dd/ffffff",
  "nombre": "Holdlamis",
  "precio": 9781,
  "stock": 30
}, {
  "id": 3,
  "imagen": "http://dummyimage.com/151x100.png/ff4444/ffffff",
  "nombre": "Wrapsafe",
  "precio": 9940,
  "stock": 97
}, {
  "id": 4,
  "imagen": "http://dummyimage.com/210x100.png/cc0000/ffffff",
  "nombre": "Pannier",
  "precio": 7642,
  "stock": 109
}, {
  "id": 5,
  "imagen": "http://dummyimage.com/151x100.png/dddddd/000000",
  "nombre": "Rank",
  "precio": 8627,
  "stock": 143
}, {
  "id": 6,
  "imagen": "http://dummyimage.com/225x100.png/ff4444/ffffff",
  "nombre": "Namfix",
  "precio": 9004,
  "stock": 50
}, {
  "id": 7,
  "imagen": "http://dummyimage.com/157x100.png/5fa2dd/ffffff",
  "nombre": "Alphazap",
  "precio": 4223,
  "stock": 39
}, {
  "id": 8,
  "imagen": "http://dummyimage.com/118x100.png/ff4444/ffffff",
  "nombre": "Treeflex",
  "precio": 3975,
  "stock": 35
}, {
  "id": 9,
  "imagen": "http://dummyimage.com/138x100.png/5fa2dd/ffffff",
  "nombre": "Transcof",
  "precio": 9799,
  "stock": 151
}, {
  "id": 10,
  "imagen": "http://dummyimage.com/199x100.png/5fa2dd/ffffff",
  "nombre": "Otcom",
  "precio": 6083,
  "stock": 146
}, {
  "id": 11,
  "imagen": "http://dummyimage.com/171x100.png/cc0000/ffffff",
  "nombre": "Regrant",
  "precio": 2656,
  "stock": 6
}, {
  "id": 12,
  "imagen": "http://dummyimage.com/165x100.png/ff4444/ffffff",
  "nombre": "It",
  "precio": 8934,
  "stock": 85
}, {
  "id": 13,
  "imagen": "http://dummyimage.com/225x100.png/dddddd/000000",
  "nombre": "Veribet",
  "precio": 5217,
  "stock": 117
}, {
  "id": 14,
  "imagen": "http://dummyimage.com/176x100.png/cc0000/ffffff",
  "nombre": "Tin",
  "precio": 3773,
  "stock": 170
}, {
  "id": 15,
  "imagen": "http://dummyimage.com/153x100.png/ff4444/ffffff",
  "nombre": "Bitwolf",
  "precio": 8792,
  "stock": 133
}, {
  "id": 16,
  "imagen": "http://dummyimage.com/156x100.png/dddddd/000000",
  "nombre": "Konklux",
  "precio": 2054,
  "stock": 107
}, {
  "id": 17,
  "imagen": "http://dummyimage.com/135x100.png/dddddd/000000",
  "nombre": "Gembucket",
  "precio": 7783,
  "stock": 72
}, {
  "id": 18,
  "imagen": "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
  "nombre": "Cookley",
  "precio": 2603,
  "stock": 1
}, {
  "id": 19,
  "imagen": "http://dummyimage.com/207x100.png/ff4444/ffffff",
  "nombre": "Redhold",
  "precio": 6847,
  "stock": 93
}, {
  "id": 20,
  "imagen": "http://dummyimage.com/225x100.png/ff4444/ffffff",
  "nombre": "Job",
  "precio": 8399,
  "stock": 157
}]

function Datos (){
  return new Promise((resolve, reject) =>{
    let error = false;
    setTimeout( () =>{
      if(error){
        reject(new Error("Error obteniendo los datos"))
      } else{
        resolve(BaseData);
      }
    }, 1000);
  })
}


function ItemListContainer(props) {
  const [items, setItems] = useState([]);

    useEffect(
    () =>{
      let datosRequeridos = Datos();
      datosRequeridos.then( (datosResolve)=>{
      setItems(datosResolve);
     })
      .finally(() =>{
        console.log("termino")
      })
    },
      []
  );
  
  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList data={items}/>
    </div>
  )
}

export default ItemListContainer