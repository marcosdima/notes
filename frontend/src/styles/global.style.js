import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.colors.text.color};
        font-family: ${({ theme }) => theme.font.family};
    }
`;

export default GlobalStyle;