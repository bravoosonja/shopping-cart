import { useContext, useEffect, useState } from "react";
// Styles
import { HeaderButton, Badge, IconWrapper } from "./HeaderCartButton.styles";
import CartIcon from "../../assets/images/icon-cart.svg";
// Context
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((current, item) => {
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
    <HeaderButton onClick={props.onClick}>
      <IconWrapper>
        <img src={CartIcon} alt="cart-icon" />
        <Badge>{numberOfCartItems}</Badge>
      </IconWrapper>
    </HeaderButton>
  );
};

export default HeaderCartButton;
