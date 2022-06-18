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
    width: 4vw;
    display: block;
    border-radius: 5px;

    @media (max-width: 414px) {
      width: 10vw;
    }
  }
`;

const Content = styled.div`
  inline-size: 150px;
  overflow-wrap: break-word;

  @media (max-width: 414px) {
    inline-size: 60vw;
  }
`;

export default CartItem;
