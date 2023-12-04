import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import './Shop.css';



export const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ title: product.title, image: product.image, price: product.price });
        console.log(`Product ${product.title} added to cart`);
    };
    return (
        <div className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export const ProductGallery = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const categoriesToExclude = ['electronics', 'jewelery'];

    useEffect(() => {
        // Function to fetch products from the API with a limit of 5
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (response.ok) {
                    let data = await response.json();

                    data = data.filter((product) => !categoriesToExclude.includes(product.category.toLowerCase()));

                    setProducts(data); // Set the retrieved products to the state
                    setLoading(false); // Set loading to false once data is fetched
                } else {
                    throw new Error('Failed to fetch products');
                }
            } catch (error) {
                console.error(error);
                setLoading(false); // Set loading to false in case of an error
            }
        };

        fetchProducts(); // Fetch products when the component mounts
    }, []); // Empty dependency array to execute only once

    return (
        <div className="product-gallery">
            {loading ? (
                <p>Loading...</p> // Display a loading message while fetching data
            ) : (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </div>
    );
};
