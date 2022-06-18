import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
// Components
import HeaderCartButton from "./HeaderCartButton";
// Images
import Logo from "../../assets/images/logo.svg";
import Avatar from "../../assets/images/image-avatar.png";
// Icon
import MenuIcon from "../../assets/images/icon-menu.svg";

const Header = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width:414px)" });
  return (
    <>
      <Wrapper>
        <Content>
          {isMobile && (
            <Menu>
              <img src={MenuIcon} alt="menu" />
            </Menu>
          )}
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
  margin-top: 5vh;
  width: 100%;

  @media (max-width: 414px) {
    flex-direction: column;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    width: 100vw;
    justify-content: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 414px) {
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding: 0.2rem 1.5rem;
    gap: 1rem;
  }

  #controls {
    display: flex;
    justify-content: flex-end;
    align-items: space-evenly;
    width: 100%;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 4.5vw;
    display: block;
  }
`;

const LogoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    display: block;
    cursor: pointer;

    @media (max-width: 414px) {
      width: 37vw;
      display: block;
    }
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 6rem;
  margin: 0 10vw;

  @media (max-width: 414px) {
    gap: 1rem;
    margin: 0 0.1vw;
  }
`;

const StyledLi = styled.li`
  list-style: none;
  font-size: 1.9vh;
  font-weight: 400;
  color: var(--grayBlue);
  padding: 1rem 2rem;
  padding-bottom: 3rem;
  display: inline;
  cursor: pointer;

  @media (max-width: 414px) {
    display: none;
  }

  &:hover {
    color: var(--black);
    border-bottom: 5px solid var(--orange);
  }
`;

const AvatarStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 3vw;
  img {
    width: 50px;
    height: auto;

    @media (max-width: 414px) {
      width: 8vw;
      display: block;
    }

    :hover {
      border: 2px solid var(--orange);
      border-radius: 50%;
    }
  }
`;

const Line = styled.hr`
  border: 1px solid var(--lightGrayBlue);
  width: 100%;
  margin-top: 4vh;
  @media (max-width: 414px) {
    display: none;
  }
`;

export default Header;
