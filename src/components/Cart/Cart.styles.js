import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 1.5rem;
`;

export const StyledLine = styled.hr`
  border: 1px solid var(--lightGrayBlue);
  width: 100%;
  margin-top: 12px 0;

  /* position: fixed;
  bottom: 5vh;
  width: 100; */
`;
export const CartItemsStyle = styled.div``;

export const Total = styled.div`
  display: inline-block;
`;

export const DeleteIconStyle = styled.div`
  position: fixed;
  cursor: pointer;
`;

export const CloseIconStyle = styled.div`
  position: fixed;
  bottom: 11.5vh;
  left: 21vw;
  cursor: pointer;
`;

export const Buttons = styled.button``;
