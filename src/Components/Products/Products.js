import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div className="shop-container">

            <div className='Products-container'>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                cart section 
            </div>
        </div>
    );
};

export default Products;