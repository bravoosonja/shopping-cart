import styled from "styled-components";

export const ProductImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const ProductImageBig = styled.div`
  img {
    height: 480px;
    width: auto;
    border-radius: 18px;
  }
`;

export const ProductImageThumb = styled.div`
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
