
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA7vJmKwrt98fp4fmEC7BEsIGKzMpCSxH0",
  authDomain: "reactodar.firebaseapp.com",
  projectId: "reactodar",
  storageBucket: "reactodar.appspot.com",
  messagingSenderId: "1090117451780",
  appId: "1:1090117451780:web:abfc8152788902168cb551"
};

const app = initializeApp(firebaseConfig);
export const BaseData = getFirestore(app);