/* eslint-disable no-unused-vars */

import './App.css';
import Navbar from './components/Navbar';
import itemListConteiner from './components/itemListConteiner';
import CartWidget from './components/CartWidget';




const mensajeBienvenida = 'Bienvenidos a React'

function App() {
  return (
    <>
    <header>
    <Navbar></Navbar>
    <CartWidget></CartWidget>
    <div className="App">
      <h1 className= 'text-3xl font-bold underline'>{mensajeBienvenida}</h1>
        <ul>
          <li>React</li>
          <li>Jsx</li>
          <li>Webpack</li>
        </ul> 
    </div>
    </header>
    
    <itemListConteiner></itemListConteiner>
    </>

   
  )
}

export default App;
