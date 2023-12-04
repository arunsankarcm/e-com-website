// CartContext.jsx

import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const isProductInCart = (product) => {
        return cartItems.some((item) => item.title === product.title);
    };

    const addToCart = (product) => {
        if (!isProductInCart(product)) {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        } else {
            const updatedCartItems = cartItems.map((item) =>
                item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCartItems);
        }
    };

    const updateCartItemQuantity = (index, newQuantity) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = newQuantity;
        setCartItems(updatedCartItems);
    };

    const removeItemFromCart = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateCartItemQuantity, removeItemFromCart, calculateTotalPrice, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
