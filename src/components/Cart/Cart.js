import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items Ordered: {props.cart.length}</h3>
            <div>
                <p>Total: ${total}</p>
            </div>
        </div>
    );
};

export default Cart;