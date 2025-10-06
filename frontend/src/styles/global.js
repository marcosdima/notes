import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text.color};
        font-family: ${({ theme }) => theme.font.family};
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
