import { useRef, useState } from "react";
import styled from "styled-components";
// Components
import Button from "../UI/Button";

const ProductItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <>
      <StyledForm onSubmit={submitHandler}>
        <StyledInput
          ref={amountInputRef}
          input={{
            id: "amount_" + props.id,
            min: "1",
            step: "1",
            type: "number",
            defaultValue: "1",
          }}
          placeholder="Qty"
        />
        <Button />
      </StyledForm>
      {!amountIsValid && <p>Please enter a valid amount.</p>}
    </>
  );
};

// Styles
const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  padding: 1rem;
  @media (max-width: 414px) {
    padding: 0;
    flex-direction: column;
  }
`;

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
    width: 90vw;
  }

  :focus {
    outline: 3px solid var(--paleOrange);
  }
`;

export default ProductItemForm;
