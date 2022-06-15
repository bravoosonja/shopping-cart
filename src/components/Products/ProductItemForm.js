import { useRef, useState } from "react";

// Icons
import PlusIcon from "../../assets/images/icon-plus.svg";
import MinusIcon from "../../assets/images/icon-minus.svg";
import { BsCart3 } from "react-icons/bs";
// Styles
import {
  StyledForm,
  StyledInput,
  StyledButton,
} from "./ProductItemForm.styles";

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
        <button>
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
        <button>
          <img src={PlusIcon} alt="plus item" />
        </button>
        <StyledButton type="submit">
          <BsCart3 />
          Add to cart
        </StyledButton>
        {!amountIsValid && <p>Please enter a valid amount.</p>}
      </StyledForm>
    </>
  );
};

export default ProductItemForm;
