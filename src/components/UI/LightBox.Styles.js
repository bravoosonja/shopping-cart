import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 100;
`;

export const Gallery = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: hsla(0, 0%, 0%, 75%);
  cursor: pointer;

  img {
    height: auto;
    width: 100%;
  }
`;
