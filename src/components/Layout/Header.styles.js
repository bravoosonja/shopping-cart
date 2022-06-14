import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  max-width: var(--maxWidth);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogoStyle = styled.div`
  img {
    width: 200px;
    height: auto;
  }
`;

export const Text = styled.div`
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */

  ul,
  li {
    list-style-type: none;
    font-weight: 700;
    color: var(--grayBlue);
    font-size: 1.2rem;
    display: inline;
    margin-right: 30px;
    :hover {
      color: var(--black);
    }
  }
`;

export const AvatarStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 20px;
  img {
    width: 60px;
    height: auto;
  }
`;
