import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --orange:hsl(26, 100%, 55%);
        --paleOrange: hsl(25, 100%, 94%);
        --blue: hsl(220, 13%, 13%);
        --grayBlue: hsl(220, 14%, 75%);
        --lightGrayBlue:  hsl(223, 64%, 98%);
        --white: hsl(0, 0%, 100%);
        --black: hsla(0, 0%, 0%, 75%);
        --maxWidth: 1240px;
        --desktop: 1440px;
        --mobile: 375px;
    }

    * {
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
        
    }

    body {
        margin: 0 100px;
        padding: 0;
        background-color:var(--white);
        color: var(--black);
        width: var(--maxWidth);
       
        p {
            font-size: 16px;
            font-weight: 400;
        }

        h3 {
            font-size: 1.2rem;
            font-weight: 700;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 700;

        }

        h1 {
            font-size: 1.7rem;
            font-weight: 700;
        }
    }
`;
