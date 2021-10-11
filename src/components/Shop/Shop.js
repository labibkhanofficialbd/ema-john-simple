import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>Products: {products.length}</h3>
                {
                    products.map(product => console.log(product))
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <h3>Items Ordered</h3>
            </div>
        </div>
    );
};

export default Shop;