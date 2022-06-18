import React from "react";
import styled from "styled-components";

const Input = React.forwardRef((props, ref) => {
  return <StyledInput type="number" ref={ref} {...props.input} />;
});

const StyledInput = styled.input.attrs({ type: "number" })`
  border: none;
  font-size: 16px;
  font-weight: 700;
  background-color: var(--lightGrayBlue);
  width: 5rem;
  text-align: center;
  border-radius: 12px;
  padding: 1rem;
  width: 50%;
  cursor: pointer;

  @media (max-width: 414px) {
    flex-direction: column;
    width: 85vw;
  }

  :focus {
    outline: 3px solid var(--paleOrange);
  }
`;

export default Input;
