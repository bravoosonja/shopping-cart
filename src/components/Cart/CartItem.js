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
        <p>
          {price} X {props.amount}
        </p>
      </Content>
      <button onClick={props.onRemove}>
        <img src={DeleteIcon} alt="delete" />
      </button>
    </Wrapper>
  );
};

// Styles
const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    cursor: pointer;
  }
`;

const ProductThumb = styled.div`
  img {
    width: 6vw;
    display: block;
    border-radius: 5px;
  }
`;

const Content = styled.div`
  inline-size: 150px;
  overflow-wrap: break-word;
`;

export default CartItem;
