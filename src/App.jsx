import React from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
    <div className="grid-container">
      <div className="row">
        <div className='head'><h1>Fashion Store</h1></div>
        <div className="three-words">
          <div>
            <Link to="Shop">Shop</Link>
          </div>
          <div>
            <Link to="cart">Cart</Link>
          </div>
          <div>
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
      <div className="row">
        <Outlet />
      </div>
      <div className="row"></div>
    </div>
    </CartProvider>
  );
}

export default App;
