import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    /* store items which one is clicked */
    const [items, setitems] = useState([]);
    /* function for handle add to cart  */
    function AddToCart(id) {
        const newCart = [...items, id];
        setitems(newCart);
    }
    console.log(items.length)
    return (
        <div className="shop-container">

            <div className='Products-container'>
                    {
                        products.map(product => <Product key={product.id} product={product} AddToCart={AddToCart}></Product>)
                    }
            </div>
            <div className='cart-container'>
                <Cart items={items}></Cart>
            </div>
        </div>
    );
};

export default Products;