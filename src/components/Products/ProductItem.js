import { useContext } from "react";
import styled from "styled-components";
// Components
import ProductItemForm from "./ProductItemForm";
import CartContext from "../../store/CartContext";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      thumbnail: props.thumbnail,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <Wrapper>
      <ProductName>{props.name}</ProductName>
      <ProductImg>
        <img src={props.thumbnail} alt={props.name} />
      </ProductImg>
      <Content>
        <ProductPrice>${props.price}</ProductPrice>
        <ProductDescription>{props.description}</ProductDescription>
        <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
      </Content>
    </Wrapper>
  );
};

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min-content;
  margin: auto;
`;

const ProductImg = styled.div`
  img {
    width: 320px;
    height: auto;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
`;

const Content = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductName = styled.h2`
  color: var(--orange);
  padding: 2rem;
`;

const ProductDescription = styled.p`
  color: var(--grayBlue);
  margin-top: 1rem;
`;

const ProductPrice = styled.h3`
  color: var(--Blue);
`;

export default ProductItem;
