import {useReducer} from 'react';
// Context
import CartContext from './CartContext';

const initialState = {
    items:[],
    totalAmount:0,
};

const cartReducer = (state,action) => {
    // add items to cart
    if(action.type==='ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const exisitngCartItemIndex = state.items.findIndex((item)=>item.id===action.item.id);
        const exisitingCartItem = state.items[exisitngCartItemIndex];

        let updatedItems;

        if (exisitingCartItem){
            const updatedItem = {
                ...exisitingCartItem,
                amount:exisitingCartItem.amount+action.item.amount,
            };
            updatedItems=[...state.items];
            updatedItems[exisitngCartItemIndex]=updatedItem;
        }else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }
    // remove items from cart
    if (action.type==="REMOVE"){
        const exisitngCartItemIndex = state.items.findIndex((item)=> item.id ===action.id);
        const existingItem = state.items[exisitngCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;

        if (existingItem.amount ===1){
            updatedItems = state.items.filter(item=>item.id !==action.id);
        } else {
            const updatedItem = {...existingItem, amount: existingItem.amount -1};
            updatedItems = [...state.items];
            updatedItems[exisitngCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return initialState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer (cartReducer, initialState);

    const addItemHandler = (item) => {
        dispatchCart({type:'ADD', item:item});
    };

    const removeItemHandler = (id) => {
        dispatchCart({type:'REMOVE', id:id});
    };

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    );    
};

export default CartProvider;