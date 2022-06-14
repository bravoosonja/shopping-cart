import { useContext, useEffect, useState } from 'react';
// Styles 
import { Button, Badge, IconWrapper } from './HeaderCartButton.styles';
import CartIcon from "../../assets/images/icon-cart.svg";
// Context
import CartContext from '../../store/CartContext';


const HeaderCartButton = (props) => {
    const [btinIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfcartItems = items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <Button onClick={props.onClick}>
            <IconWrapper>
                <CartIcon />
            </IconWrapper>
            <Badge>{numberOfcartItems}</Badge>
        </Button>
    )
}

export default HeaderCartButton;