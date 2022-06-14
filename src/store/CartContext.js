import React from 'react';

const CartContext = React.creteContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
});

export default CartContext;