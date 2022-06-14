import React from "react";
// Components
import HeaderCartButton from "./HeaderCartButton";
// Styles
import {
  Wrapper,
  Content,
  Text,
  LogoStyle,
  AvatarStyle,
  Line,
  StyledLi,
} from "./Header.styles";
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

export default Header;
