import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    : root {
        --orange:hsl(26, 100%, 55%);
        --paleOrange: hsl(25, 100%, 94%);
        --blue: hsl(220, 13%, 13%);
        --grayBlue: hsl(220, 14%, 75%);
        --lightGrayBlue:  hsl(223, 64%, 98%);
        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%);

    }

    * {
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        p {
            font-size: 16px;
            font-weight: 400;
        }
    }
`;
