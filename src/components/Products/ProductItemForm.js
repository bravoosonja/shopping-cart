import { useRef, useState } from "react";
import styled from "styled-components";
// Components
import Button from "../UI/Button";
import Input from "../UI/Input";

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
        <Input
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

export default ProductItemForm;
