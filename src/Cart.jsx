// Cart.jsx

import React from 'react';
import { useCart } from './CartContext';
import './cart.css';

const Cart = () => {
    const { cartItems, updateCartItemQuantity, calculateTotalPrice, removeItemFromCart } = useCart();

    const handleIncrement = (index) => {
        updateCartItemQuantity(index, cartItems[index].quantity + 1);
    };

    const handleDecrement = (index) => {
        if (cartItems[index].quantity > 1) {
            updateCartItemQuantity(index, cartItems[index].quantity - 1);
        }
    };

    const handleRemove = (index) => {
        removeItemFromCart(index);
    };

    return (
        <div className="cart-container">
            <h2>Cart Items</h2>
            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <div className="cart-item" key={index}>
                        <img src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <p>Price: {item.price}</p>
                        <div className="quantity-controls">
                            <button onClick={() => handleDecrement(index)}>-</button>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => handleIncrement(index)}>+</button>
                            <button onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Display the total price */}
            <div className="total-price">
                <h3>Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart;
