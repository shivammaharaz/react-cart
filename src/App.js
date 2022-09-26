import React,{useState} from 'react';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';

function App() {
  const [cart,setCart]=useState([])

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home cart={cart} setCart={setCart} key={1} />} />
        <Route path="/cart" element={ <Cart cart={cart} setCart={setCart} key={989} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
