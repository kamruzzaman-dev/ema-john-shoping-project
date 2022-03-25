import React, { useState } from 'react';
import './Product.css'
const Product = (props) => {
    const { id, name, price, img, ratings, seller } = props.product;
const {AddToCart} = props;

// console.log(props);
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h6>{name}</h6>
                <p>Price : ${price}</p>
                <p><small>Manufacture : {seller}</small> </p>
                <p><small>Rating : {ratings}</small> </p>
            </div>
            <button className='btn-cart' onClick={()=>AddToCart(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;