import { useContext } from "react";
import styled from "styled-components";
// Components
import ProductItemForm from "./ProductItemForm";
import CartContext from "../../store/CartContext";
import Button from "../UI/Button";

const ProductItem = (props) => {
  cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      image: props.image,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <Wrapper>
      <ProductImg>
        <img src={props.image} alt={props.title} />
      </ProductImg>
      <Content>
        <ProductName>{props.name}</ProductName>
        <ProductPrice>{props.price}</ProductPrice>
        <Button />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImg = styled.div`
  img {
    width: 300px;
    height: auto;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 0.5rem;
`;

const ProductName = styled.h2`
  color: var(--orange);
`;

const ProductDescription = styled.p`
  color: var(--blue);
`;

const ProductPrice = styled.h3`
  background-color: var(--lightGrayBlue);
  color: var(--grayBlue);
`;

export default ProductItem;
