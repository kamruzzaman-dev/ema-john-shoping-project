import React, { useEffect, useState } from 'react';
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
                products.map(product => console.log(product))
            }
        </div>
    );
};

export default Products;