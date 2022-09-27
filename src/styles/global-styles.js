import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  body {
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.primaryFont};
  }
`;
