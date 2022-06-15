import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

export const StyledInput = styled.input`
  border: none;
  font-size: 16px;
  font-weight: 700;
  background-color: var(--lightGrayBlue);
  width: 5rem;
  text-align: center;
  border-radius: 12px;
  padding: 1rem;
  width: 40%;

  :focus {
    outline: none;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 700;
  color: var(--black);
`;

export const StyledButton = styled.button`
  background-color: var(--orange);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  width: 250px;
  gap: 15px;
  font-weight: 700;
  font-size: 16px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;
