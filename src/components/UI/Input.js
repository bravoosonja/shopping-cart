import React from 'react';
// Styles
import { Wrapper, Content, Text } from "./Input.styles";

const Input = React.forwardRef((props,ref) => {
    return (
        <Wrapper>
            <Content>
                <Text>

                </Text>
            </Content>
        </Wrapper>
    )
})

export default Input;