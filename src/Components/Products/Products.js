import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])
    return (
        <div>
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;