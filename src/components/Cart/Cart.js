import { useContext } from "react";
import styled from "styled-components";
// Context
import CartContext from "../../store/CartContext";
// Components
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
// Icons
import CloseIcon from "../../assets/images/icon-close.svg";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          thumbnail={item.thumbnail}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        >
          <img src={item.image} alt="product" />
        </CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <Title>Cart</Title>
      <CloseIconStyle onClick={props.onClose}>
        <img src={CloseIcon} alt="close cart" />
      </CloseIconStyle>
      <StyledLine />
      <Content>
        {/*show when item is in a cart */}
        {cartItems}
        {hasItems && (
          <Total>
            <p>
              Total Amount:
              <span>{totalAmount}</span>
            </p>
          </Total>
        )}
        {hasItems && <StyledButton>Checkout</StyledButton>}
        {/* Show when cart is empty */}
        {!hasItems && (
          <Empty>
            <h4>Your cart is empty.</h4>
          </Empty>
        )}
      </Content>
    </Modal>
  );
};

const Title = styled.h3`
  text-align: left;
  padding: 1.5rem;
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    text-align: left;
  }
`;

const StyledLine = styled.hr`
  border: 1px solid var(--lightGrayBlue);
  width: 100%;
  margin-top: 10px 0;
`;

const Total = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 700;
    margin-left: 5px;
  }
`;

const CloseIconStyle = styled.div`
  position: fixed;
  top: 3vh;
  left: 16vw;
  cursor: pointer;

  @media (max-width: 414px) {
    left: 83vw;
  }
`;

const StyledButton = styled.button`
  background-color: var(--orange);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  width: 250px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: 414px) {
    width: 83vw;
  }

  :hover {
    background-color: hsla(26, 100%, 55%, 0.75);
  }
`;

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: max-content;

  h4 {
    color: var(--grayBlue);
  }
`;

export default Cart;
