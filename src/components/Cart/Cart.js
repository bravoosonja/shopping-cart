import { useContext } from "react";
// Context
import CartContext from "../../store/CartContext";
// Components
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
// Styles
import {
  Wrapper,
  Content,
  CartItemsStyle,
  Total,
  Buttons,
  CloseIconStyle,
  DeleteIconStyle,
  StyledLine,
} from "./Cart.styles";
// Icons
import DeleteIcon from "../../assets/images/icon-delete.svg";
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
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <Wrapper>
        <Content>
          <h3>Cart</h3>
        </Content>
        <StyledLine />
        <Content>
          <CloseIconStyle onClick={props.onClose}>
            <img src={CloseIcon} alt="close cart" />
          </CloseIconStyle>
          <CartItemsStyle>
            {cartItems}
            <Total>
              <span>Total Amount</span>
              <span>{totalAmount}</span>
            </Total>
            {hasItems && (
              <DeleteIconStyle>
                <img src={DeleteIcon} alt="delete item from cart" />
              </DeleteIconStyle>
            )}
          </CartItemsStyle>
          {hasItems && <Buttons>Checkout</Buttons>}
        </Content>
      </Wrapper>
    </Modal>
  );
};

export default Cart;
