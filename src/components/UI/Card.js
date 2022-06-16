import styled from "styled-components";

const Card = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  padding: 3rem;
`;

export default Card;
