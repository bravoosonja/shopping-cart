import styled from "styled-components";
// Icon
import { BsCart3 } from "react-icons/bs";

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

export default Button;
