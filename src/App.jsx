import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="grid-container">
      <div className="row">
        <div className='head'><h1>Fake Store</h1></div>
        <div className="three-words">
          <div>
            <Link to="Shop">Shop</Link>
          </div>
          <div>
            <Link to="cart">Cart</Link>
          </div>
        </div>
      </div>
      <div className="row">
        <img src='https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej-1280x720.png'></img>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default App;
