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

  const btnAnimate = btnIsHighlighted ? "animate" : "";

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
    <HeaderButton animate={btnAnimate} onClick={props.onClick}>
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
  animation: ${(props) => (props.animate ? "bump 300ms ease-out" : "none")};

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
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

  :hover {
    background-color: hsla(26, 100%, 55%, 0.75);
  }
`;

export default HeaderCartButton;
