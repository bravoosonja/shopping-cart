import React from "react";
import styled from "styled-components";
// Components
import ProductImages from "../Products/ProductImages";
import ProductDescriptions from "../Products/ProductDescriptions";

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--maxWidth);
  padding-top: 5rem;
  margin: auto;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

export default Main;
