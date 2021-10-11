import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    console.log(props.product);
    const { name, img, saller, price, stock } = props.product

    return (
        <div className="product">
            <img style={{ paddingTop: "20px", paddingBottom: "20px" }} src={img} alt="" />
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p><small>by {saller}</small></p>
                <h4>${price}</h4>
                <p>Only {stock} left in stock - ORDER SOON</p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                >{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;