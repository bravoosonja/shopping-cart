import styled from "styled-components";

export const Button = styled.button`
  font: inherit;
  border: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-weight: bold;
  :hover,
  :active {
  }
`;

export const IconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 0.3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Badge = styled.div`
  font-size: 12px;
  background: var(--orange);
  color: var(--white);
  padding: 1px 6px;
  border-radius: 45%;
  vertical-align: top;
  margin-left: -10px;
  margin-bottom: 18px;
  :hover,
  :active {
  }
`;
