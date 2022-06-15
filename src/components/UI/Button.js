// Icon
import { BsCart3 } from "react-icons/bs";
// Styles
import { StyledButton } from "./Button.styles";

const Button = () => {
  return (
    <>
      <StyledButton>
        <BsCart3 />
        Add to cart
      </StyledButton>
    </>
  );
};

export default Button;
