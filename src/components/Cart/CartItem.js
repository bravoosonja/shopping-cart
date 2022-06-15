// Styles
import { Wrapper, Content, Text } from "./CartItem.styles";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <Wrapper>
        <Content>
          <Text>
            <h2>{props.name}</h2>
            <p>{price}</p>
            <p>{props.amount}</p>
          </Text>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </Content>
      </Wrapper>
    </li>
  );
};

export default CartItem;
