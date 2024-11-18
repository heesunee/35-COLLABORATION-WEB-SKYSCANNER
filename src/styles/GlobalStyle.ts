import { createGlobalStyle } from 'styled-components';

import Reset from './reset';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  * {
    box-sizing: border-box;
  }

  :root {
    --max-width: 375px;
    --max-height: 812px;
  }

  html,
  body {
    font-size: 62.5%;
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  #root {
    width: 100%;
    max-width: var(--max-width);
    min-height: var(--max-height);
    margin: 0 auto;
  }

  @media (min-width: 375px) {
    #root {
      max-width: var(--max-width);
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;