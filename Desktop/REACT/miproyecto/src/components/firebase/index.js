
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection, query, where } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA7vJmKwrt98fp4fmEC7BEsIGKzMpCSxH0",
  authDomain: "reactodar.firebaseapp.com",
  projectId: "reactodar",
  storageBucket: "reactodar.appspot.com",
  messagingSenderId: "1090117451780",
  appId: "1:1090117451780:web:abfc8152788902168cb551"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getAllProducts(){
  const miColec = collection(db, "productos");
  const productosSnap= await getDocs(miColec);

  const result = productosSnap.docs.map(item =>{
    return{ ...item.data(), id: item.id}
  });

  return result;

}

export async function getAllProductsFrom(category){
  const miColec = collection(db,"productos");
  const myquery = query(miColec, where("categoria", "==", category));

  const productosSnap = await getDocs(myquery);

  const result = productosSnap.docs.map(item =>{
    return {...item.data(), id: item.id}
  });
  return result;
}