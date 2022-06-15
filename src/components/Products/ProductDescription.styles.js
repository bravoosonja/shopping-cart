import styled from "styled-components";

export const ProductDescription = styled.div`
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

export const Price = styled.div`
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

export const OrderContent = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
