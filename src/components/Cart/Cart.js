import {useContext} from 'react';
// Components
// Context
import CartContext from '../../store/CartContext';
// Styles 
import { Wrapper, Content, Text } from "./Cart.styles";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount:1});
    };

    const cartItems = (
        
    )
}