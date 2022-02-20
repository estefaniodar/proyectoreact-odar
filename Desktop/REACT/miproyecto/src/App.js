/* eslint-disable no-unused-vars */

import './App.css';

import itemListContainer from './components/itemListContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    
    <div>
      <Navbar></Navbar>
      <itemListContainer greeting="Hola CoderHouse"></itemListContainer>
  
    </div>
    
  );
}

export default App;
