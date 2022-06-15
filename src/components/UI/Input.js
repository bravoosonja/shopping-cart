import React from "react";
// Styles
import { Wrapper, StyledInput, StyledLabel } from "./Input.styles";
// Icons
import PlusIcon from "../../assets/images/icon-plus.svg";
import MinusIcon from "../../assets/images/icon-minus.svg";

const Input = React.forwardRef((props, ref) => {
  return (
    <Wrapper>
      <StyledInput>
        <button>
          <img src={MinusIcon} alt="minus item" />
        </button>
        <input type="text" ref={ref} {...props.input} />
        <button>
          <img src={PlusIcon} alt="plus item" />
        </button>
      </StyledInput>
    </Wrapper>
  );
});

export default Input;
