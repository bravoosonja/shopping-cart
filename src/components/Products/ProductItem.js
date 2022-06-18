import { useContext } from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
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
    <>
      <MediaQuery maxWidth={414}>
        <Wrapper>
          <ProductImg>
            <img src={props.image} alt={props.name} />
          </ProductImg>
          <Content>
            <span>SNEAKER COMPANY</span>
            <ProductName>{props.name}</ProductName>
            <ProductDescription>{props.description}</ProductDescription>
            <ProductPrice>${props.price}</ProductPrice>
            <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
          </Content>
        </Wrapper>
      </MediaQuery>
      <MediaQuery minWidth={1040}>
        <Wrapper>
          <ProductName>{props.name}</ProductName>
          <ProductImg>
            <img src={props.image} alt={props.name} />
          </ProductImg>
          <Content>
            <ProductPrice>${props.price}</ProductPrice>
            <ProductDescription>{props.description}</ProductDescription>
            <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
          </Content>
        </Wrapper>
      </MediaQuery>
    </>
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
  @media (max-width: 414px) {
    width: 100%;
  }
`;

const ProductImg = styled.div`
  img {
    max-width: 100%;
    display: block;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;

    @media (max-width: 414px) {
      border-radius: 0;
      height: 70%;
    }
  }
`;

const Content = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 414px) {
    padding: 1rem;
    margin-top: 0;
    align-items: flex-start;
    padding: 1.5rem 2rem;
    span {
      color: var(--orange);
      font-size: 13px;
      font-weight: 700;
      padding: 0.5rem 0;
    }
  }
`;

const ProductName = styled.h2`
  color: var(--orange);
  padding: 1rem;

  @media (max-width: 414px) {
    text-align: left;
    padding: 0;
    color: var(--black);
    font-size: 30px;
  }
`;

const ProductDescription = styled.p`
  color: var(--grayBlue);
  margin-top: 1rem;

  @media (max-width: 414px) {
    text-align: left;
  }
`;

const ProductPrice = styled.h3`
  color: var(--Blue);
  @media (max-width: 414px) {
    padding: 1rem 0;
    font-size: 22px;
  }
`;

export default ProductItem;
