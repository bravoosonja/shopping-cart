// Styles
import { Wrapper, Content, Text } from "./Header.styles";
import Logo from "../../assets/images/logo.svg";
// import IconCart from "../../assets/images/icon-cart.svg";
import Avatar from '../../assets/images/image-avatar.png';

const Header = () => {
    <>
    <Wrapper>
        <Content>
        <Logo/>
        <Text>
            <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </Text>
        {/* <IconCart/> */}
        <Avatar/>
        </Content>
    </Wrapper>
    </>
};

export default Header;