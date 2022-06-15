import React from "react";
// Styles
import {
  Wrapper,
  ProductImageBig,
  ProductImageThumb,
} from "./ProductImages.styles";
// Images
import BigImage from "../../assets/images/image-product-1.jpg";
import ThumbImage1 from "../../assets/images/image-product-1-thumbnail.jpg";
import ThumbImage2 from "../../assets/images/image-product-2-thumbnail.jpg";
import ThumbImage3 from "../../assets/images/image-product-3-thumbnail.jpg";
import ThumbImage4 from "../../assets/images/image-product-4-thumbnail.jpg";

const ProductImages = () => {
  return (
    <Wrapper>
      <ProductImageBig>
        <img src={BigImage} alt="main product" />
      </ProductImageBig>
      <ProductImageThumb>
        <img src={ThumbImage1} alt="Thumbnail for product 1" />
        <img src={ThumbImage2} alt="Thumbnail for product 2" />
        <img src={ThumbImage3} alt="Thumbnail for product 3" />
        <img src={ThumbImage4} alt="Thumbnail for product 4" />
      </ProductImageThumb>
    </Wrapper>
  );
};

export default ProductImages;
