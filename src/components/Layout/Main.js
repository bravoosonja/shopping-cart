import React from "react";
// Components
import ProductImages from "../Products/ProductImages";
import ProductDescriptions from "../Products/ProductDescriptions";
// Styles
import { Wrapper, Content } from "./Main.styles";

const Main = () => {
  return (
    <Wrapper>
      <Content>
        <ProductImages />
        <ProductDescriptions />
      </Content>
    </Wrapper>
  );
};

export default Main;
