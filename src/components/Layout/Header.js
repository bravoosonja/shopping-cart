import React from "react";
import styled from "styled-components";
// Components
import HeaderCartButton from "./HeaderCartButton";
// Images
import Logo from "../../assets/images/logo.svg";
import Avatar from "../../assets/images/image-avatar.png";

const Header = (props) => {
  return (
    <>
      <Wrapper>
        <Content>
          <LogoStyle>
            <img src={Logo} alt="logo" />
          </LogoStyle>
          <Text>
            <nav>
              <StyledLi>Collections</StyledLi>
              <StyledLi>Men</StyledLi>
              <StyledLi>Women</StyledLi>
              <StyledLi>About</StyledLi>
              <StyledLi>Contact</StyledLi>
            </nav>
          </Text>
          <div id="controls">
            <HeaderCartButton onClick={props.onShowCart} />
            <AvatarStyle>
              <img src={Avatar} alt="avatar" />
            </AvatarStyle>
          </div>
        </Content>
      </Wrapper>
      <Line />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  width: var(--maxWidth);
`;

const Content = styled.div`
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

const LogoStyle = styled.div`
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

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 6rem;
  margin: 0 1rem;
`;

const StyledLi = styled.li`
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

const AvatarStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 30px;
  img {
    width: 50px;
    height: auto;

    :hover {
      border: 2px solid var(--orange);
      border-radius: 50%;
    }
  }
`;

const Line = styled.hr`
  border: 1px solid var(--lightGrayBlue);
  width: 100%;
  margin-top: 40px;
`;

export default Header;
