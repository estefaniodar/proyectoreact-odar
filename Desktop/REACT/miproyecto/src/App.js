
import './App.css';

import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    
    <div>
      <Router>
        <Navbar></Navbar> 
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting="Productos" />}/>
          <Route path='/category/:categoryid' element={ <ItemListContainer greeting="Categoria de productos" />}/>
          <Route path='/item/:id' element={ <ItemDetailContainer greeting="descripcion" />}/>
        </Routes>
      </Router>
  
    </div>
    
    
  );
}

export default App;
