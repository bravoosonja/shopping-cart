import React from "react";
// Styles
import {
  ProductDescription,
  Price,
  OrderContent,
} from "./ProductDescription.styles";
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

export default ProductDescriptions;
