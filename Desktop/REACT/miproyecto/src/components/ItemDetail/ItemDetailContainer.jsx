import React, { useEffect } from 'react'
import { useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const BaseData =[{
  "id": 1,
  "imagen": "https://http2.mlstatic.com/D_980981-MLA32160022041_092019-O.jpg",
  "nombre": "ESMALTES CHERIMOYA",
  "precio": 1079,
  "categoria": "CHERIMOYA",
  "stock": 66
}, {
  "id": 2,
  "imagen": "https://www.lasmargaritas.com.uy//product_images/c/328/2628u__28375_zoom.jpg",
  "nombre": "ESMALTES MELINE",
  "precio": 781,
  "categoria": "MELINE",
  "stock": 60
}, {
  "id": 3,
  "imagen": "https://ohmyshop.com.ar/wp-content/uploads/2019/05/VIR-1502-1-600x600.jpg",
  "nombre": "CABINA LED-UV",
  "precio": 5099,
  "categoria": "MELINE",
  "stock": 97
}, {
  "id": 4,
  "imagen": "https://m.media-amazon.com/images/I/41IZnlwaU9L.jpg",
  "nombre": "TORNO",
  "precio": 8800,
  "categoria": "CHERIMOYA",
  "stock": 109
}, {
  "id": 5,
  "imagen": "https://nailstyle.es/wp-content/uploads/2020/10/los-mejores-pinceles-para-unas.jpg",
  "nombre": "PINCELES NAIL ART",
  "precio": 500,
  "categoria": "NAIL ART",
  "stock": 143
}, {
  "id": 6,
  "imagen": "https://www.deuñas.com.ar//product_images/x/714/531174__24644_zoom.jpg",
  "nombre": "REMOVEDOR MELINE",
  "precio": 11700,
  "categoria": "MELINE",
  "stock": 50
}, {
  "id": 7,
  "imagen": "https://d3ugyf2ht6aenh.cloudfront.net/stores/898/979/products/repujador-para-publicar-scaled1-1010dac27b911436ae16421991739096-1024-1024.jpg",
  "nombre": "REPUJADOR DE CUTICULAS CHERIMOYA",
  "precio": 447,
  "categoria": "CHERIMOYA",
  "stock": 39
}, {
  "id": 8,
  "imagen": "https://www.dd2.com.ar/image/cache/catalog/U%C3%B1as%20-%204050/Captura%20de%20pantalla%202021-05-16%20183603-550x550w.png",
  "nombre": "TIPS COFFIN UÑAS",
  "precio": 650,
  "categoria": "NAIL ART",
  "stock": 35
}, {
  "id": 9,
  "imagen": "https://www.dd2.com.ar/image/cache/catalog/U%C3%91AS%20-%204150/Captura%20de%20pantalla%202022-02-07%20165735-550x550w.jpg",
  "nombre": "BASE COAT Y TOP COAT CHERIMOYA",
  "precio": 1950,
  "categoria": "CHERIMOYA",
  "stock": 151
}, {
  "id": 10,
  "imagen": "https://m.media-amazon.com/images/I/31LW9Ca-jXL.jpg",
  "nombre": "ALICATE STALKES PRO",
  "precio": 6115,
  "categoria": "NAIL ART",
  "stock": 146
},]


function ItemDetailContainer(props) {

    const {id}= useParams([]);

    let datosRequeridos = new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            const itemSolicitado = BaseData.find(item =>{
                return item.id === Number(id);
            })
            resolve(itemSolicitado);
        }, 800)
    
    })

    const [item,setItem] = useState([]);
    useEffect(
    () =>{

      datosRequeridos.then( (datosResolve)=>{
      setItem(datosResolve);
     })
      .finally(() =>{
        console.log("termino")
      })
    },
      [id]);
  
  return (
    <>
        <div>
            <h1>{props.greeting}</h1>
            <ItemDetail 
                id={item.id}
                nombre={item.nombre}
                precio={item.precio}
                stock={item.stock}
                categoria={item.categoria}
                imagen={item.imagen}
                />
        </div>
    </>
  )
}

export default ItemDetailContainer