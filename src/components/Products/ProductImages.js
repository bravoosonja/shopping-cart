import React from "react";
// Styles
import {
  Wrapper,
  ProductImageBig,
  ProductImageThumb,
} from "./ProductImages.styles";

// Images
import BigImage from "../../assets/images/image-product-1.jpg";

const ProductImages = () => {
  return (
    <Wrapper>
      <ProductImageBig>
        <img src={BigImage} alt="main product" />
      </ProductImageBig>
      <ProductImageThumb></ProductImageThumb>
    </Wrapper>
  );
};

export default ProductImages;
