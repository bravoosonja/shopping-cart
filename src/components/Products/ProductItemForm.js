import { useRef, useState } from "react";
import styled from "styled-components";
// Icons
import PlusIcon from "../../assets/images/icon-plus.svg";
import MinusIcon from "../../assets/images/icon-minus.svg";
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
        <button onClick={props.onRemove}>
          <img src={MinusIcon} alt="minus item" />
        </button>
        <StyledInput
          ref={amountInputRef}
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button onClick={props.onAdd}>
          <img src={PlusIcon} alt="plus item" />
        </button>
        <Button />
        {!amountIsValid && <p>Please enter a valid amount.</p>}
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 20px;
`;

const StyledInput = styled.input`
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

const StyledLabel = styled.label`
  font-weight: 700;
  color: var(--black);
`;

const StyledButton = styled.button`
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

export default ProductItemForm;
