import React from "react";
import styled from "styled-components";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const ProductImageBig = styled.div`
  img {
    height: 480px;
    width: auto;
    border-radius: 18px;
  }
`;

const ProductImageThumb = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  img {
    width: 100px;
    height: auto;
    border-radius: 18px;
  }
`;

export default ProductImages;
