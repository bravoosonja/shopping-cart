import React from "react";
// Styles
import {
  Wrapper,
  Content,
  ProductImages,
  ProductImageBig,
  ProductImageThumb,
  ProductDescription,
  Price,
} from "./Main.styles";
// Images
import BigImage from "../../assets/images/image-product-1.jpg";
import ThumbImage1 from "../../assets/images/image-product-1-thumbnail.jpg";
import ThumbImage2 from "../../assets/images/image-product-2-thumbnail.jpg";
import ThumbImage3 from "../../assets/images/image-product-3-thumbnail.jpg";
import ThumbImage4 from "../../assets/images/image-product-4-thumbnail.jpg";

const Main = () => {
  return (
    <Wrapper>
      <Content>
        <ProductImages>
          <ProductImageBig>
            <img src={BigImage} alt="main product" />
          </ProductImageBig>
          <ProductImageThumb>
            <img src={ThumbImage1} alt="Thumbnail for product 1" />
            <img src={ThumbImage2} alt="Thumbnail for product 2" />
            <img src={ThumbImage3} alt="Thumbnail for product 3" />
            <img src={ThumbImage4} alt="Thumbnail for product 4" />
          </ProductImageThumb>
        </ProductImages>
        <ProductDescription>
          <span>SNEAKER COMPANY</span>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <Price>
            <h2>$125.00</h2>
            <span>50%</span>
            <p>$250.00</p>
          </Price>
        </ProductDescription>
      </Content>
    </Wrapper>
  );
};

export default Main;
