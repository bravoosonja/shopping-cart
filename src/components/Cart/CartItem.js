import styled from "styled-components";
// Icon
import DeleteIcon from "../../assets/images/icon-delete.svg";
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Wrapper>
      <ProductThumb>
        <img src={props.thumbnail} alt={props.name} />
      </ProductThumb>
      <Content>
        <h4>{props.name}</h4>
        <p>{price}</p>
        <p>
          {price}X {props.amount}
        </p>
        <button onClick={props.onRemove}>
          <img src={DeleteIcon} alt="delete" />
        </button>
      </Content>
    </Wrapper>
  );
};

// Styles
const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const ProductThumb = styled.div``;

const Content = styled.div``;

export default CartItem;
