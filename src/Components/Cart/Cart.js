import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(props);
    /* directly props got a object. and this object had a array with element  */
    const { items } = props;
    let totalPrice = 0;
    let shippingCharge = 0;
    let tax = 0;

    for (const item of items) {
        totalPrice = totalPrice + item.price;
        shippingCharge = shippingCharge + item.shipping;
        tax = tax + parseFloat((item.price * .01).toFixed(2));
    }
    tax = parseFloat(tax.toFixed(2))
    let grandTotal = totalPrice + shippingCharge + tax;
    return (
        <div className='cart-contianer'>
            <h1>Order Summary</h1>
            <div>
                <p>toal price : ${totalPrice}</p>
                <p>Select items : ${items.length}</p>
                <p>Total Shipping Charge : ${shippingCharge}</p>
                <p>Tax : ${tax}</p>
                <h2>Grand Total : ${grandTotal}</h2>
            </div>
            <div className='btn-container'>
                <button className='btn btn-clear'>Clear Cart </button>
                <button className='btn btn-review'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;