import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
        background: transparent;
        cursor: pointer;
    }

    ul,
    ol {
        list-style: none;
    }

    img {
        display: block;
        max-width: 100%;
    }
`;