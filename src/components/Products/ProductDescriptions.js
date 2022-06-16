import React from "react";
import styled from "styled-components";
// Components
import ProductItemForm from "./ProductItemForm";

const ProductDescriptions = () => {
  return (
    <ProductDescription>
      <span>SNEAKER COMPANY</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <Price>
        <h2>$125.00</h2>
        <span>50%</span>
        <p>$250.00</p>
      </Price>
      <OrderContent>
        <ProductItemForm />
      </OrderContent>
    </ProductDescription>
  );
};

const ProductDescription = styled.div`
  align-items: left;
  width: 45%;
  margin-bottom: 200px;

  span {
    color: var(--orange);
    font-weight: 700;
    text-align: left;
  }

  h1 {
    margin: 20px 0;
    font-size: 3rem;
  }

  p {
    color: var(--grayBlue);
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const Price = styled.div`
  display: inline;
  margin: 20px 0;

  h2 {
    margin: 20px 0;
    display: inline;
  }

  span {
    margin-left: 20px;
    background-color: var(--paleOrange);
    border-radius: 10px;
    padding: 0.3rem;
    display: inline;
  }

  p {
    color: var(--grayBlue);
    background-color: transparent;
    font-weight: 400;
    text-decoration: line-through;
    width: 100%;
    display: block;
    margin-top: 10px;
  }
`;

const OrderContent = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export default ProductDescriptions;
