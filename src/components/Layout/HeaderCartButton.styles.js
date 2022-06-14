import styled from "styled-components";

export const Button = styled.button`
  font: inherit;
  border: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  /* margin-left: 400px; */
  font-weight: bold;
  :hover,
  :active {
  }
`;

export const IconWrapper = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Badge = styled.div`
  background-color: var(--orange);
  font-size: 10px;
  padding: 0.5rem;
  border-radius: 50%;
  /* margin-left: 1rem; */
  font-weight: bold;
  color: var(--white);
  :hover,
  :active {
  }
`;
