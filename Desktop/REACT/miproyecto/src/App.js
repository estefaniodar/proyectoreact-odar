
import './App.css';

import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './components/Cont/CartContext';


function App() {
  return (

    <CartContextProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Productos" />} />
          <Route path='/category/:categoryid' element={<ItemListContainer greeting="Categoria de productos" />} />
          <Route path='/item/:id' element={<ItemDetailContainer greeting="descripcion" />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>




  );
}

export default App;
