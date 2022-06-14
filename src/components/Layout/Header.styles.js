import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  width: var(--maxWidth);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  #controls {
    display: flex;
    justify-content: flex-end;
    align-items: space-evenly;
    width: 100%;
  }
`;

export const LogoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: auto;
    display: block;
    cursor: pointer;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 6rem;
  margin: 0 1rem;
`;

export const StyledLi = styled.li`
  list-style: none;
  font-size: 18px;
  font-weight: 400;
  color: var(--grayBlue);
  padding: 1rem 2rem;
  padding-bottom: 3rem;
  display: inline;
  cursor: pointer;

  &:hover {
    color: var(--black);
    border-bottom: 5px solid var(--orange);
  }
`;

export const AvatarStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 30px;
  img {
    width: 50px;
    height: auto;
    border: 2px solid var(--orange);
    border-radius: 50%;
  }
`;

export const Line = styled.hr`
  border: 1px solid var(--lightGrayBlue);
  width: 100%;
  margin-top: 40px;
`;
