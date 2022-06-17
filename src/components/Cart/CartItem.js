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
  justify-content: center;
  align-items: center;
  width: max-content;
  gap: 1rem;
`;

const ProductThumb = styled.div`
  img {
    width: 50px;
    height: auto;
    border-radius: 5px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  button {
    cursor: pointer;
  }
`;

export default CartItem;
