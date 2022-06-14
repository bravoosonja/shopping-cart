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
        --maxWidth: 1440px;
        --mobile: 375px;
    }

    * {
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
        margin: 0;
        padding: 0;
        
    }

    body {
        margin:  0 auto !important;
        padding: 0;
        max-width: var(--maxWidth);
        max-height: 100vh;
        padding: 0;
        background-color:var(--white);
        color: var(--black);
        display: flex;
        justify-content: center;
        align-items: center;
        
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

        a {
            text-decoration: none;
        }

        /* Reset button */
        button {
            border: none;
            margin: 0;
            padding: 0;
            width: auto;
            overflow: visible;
            background: transparent;
            color: inherit;
            font: inherit;
            line-height: normal;
            -webkit-font-smoothing: inherit;
            -moz-osx-font-smoothing: inherit;
            -webkit-appearance: none;
        }
    }
`;
