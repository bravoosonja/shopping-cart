import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// Icon
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

const HeaderButton = styled.button`
  font: inherit;
  border: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-weight: bold;
  :hover,
  :active {
  }
`;

const IconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Badge = styled.div`
  font-size: 12px;
  background: var(--orange);
  color: var(--white);
  padding: 1px 6px;
  border-radius: 45%;
  vertical-align: top;
  margin-left: -10px;
  margin-bottom: 18px;

  :hover,
  :active {
  }
`;
export default HeaderCartButton;
