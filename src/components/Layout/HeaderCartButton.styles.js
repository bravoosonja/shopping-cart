import styled from "styled-components";

export const IconWrapper = styled.div`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

export const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: var(--paleOrange);
  color: var(--white);
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  :hover,
  :active {
    background-color: var(--orange);
  }
`;

export const Badge = styled.div`
  background-color: var(--orange);
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

  :hover,
  :active {
    background-color: var(--paleOrange);
  }
`;
