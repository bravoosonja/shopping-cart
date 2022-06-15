import styled from "styled-components";

export const StyledInput = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lightGrayBlue);
  border-radius: 12px;
  padding: 1rem;
  width: 40%;

  button {
    margin: auto;
  }

  input {
    border: none;
    font-size: 16px;
    font-weight: 700;
    background-color: inherit;
    width: 5rem;
    text-align: center;

    :focus {
      outline: none;
    }
  }
`;

export const StyledLabel = styled.label`
  font-weight: 700;
  color: var(--black);
`;
