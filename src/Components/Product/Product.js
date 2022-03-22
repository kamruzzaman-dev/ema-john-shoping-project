import React from 'react';
import './Product.css'
const Product = (props) => {
    const {id, name , price , ratings,seller}= props.product;
//  console.log(props.product);
    return (
        <div>
            <h1>name : {name }</h1>
        </div>
    );
};

export default Product;