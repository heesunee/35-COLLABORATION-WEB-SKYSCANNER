import Reset from './reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-weight: 200;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/AppleSDGothicNeo/AppleSDGothicNeo-ExtraLight.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/AppleSDGothicNeo/AppleSDGothicNeo-ExtraLight.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/AppleSDGothicNeo/AppleSDGothicNeo-Regular.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/AppleSDGothicNeo/AppleSDGothicNeo-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/AppleSDGothicNeo/AppleSDGothicNeo-SemiBold.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/AppleSDGothicNeo/AppleSDGothicNeo-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Apple SD Gothic Neo';
    font-weight: 800;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/fonts-archive/AppleSDGothicNeo/AppleSDGothicNeo-ExtraBold.woff2') format('woff2'),
         url('https://cdn.jsdelivr.net/gh/fonts-archive/AppleSDGothicNeo/AppleSDGothicNeo-ExtraBold.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Inter';
      font-weight: 500;
      font-style: normal;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3Fwr2l6f8IJ1lkYJ4IPfQ1FZ.woff2') format('woff2');
  }
  @font-face {
      font-family: 'Inter';
      font-weight: 700;
      font-style: normal;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3Fwr2l6f8IJ1lkbd4IPfQ1FZ.woff2') format('woff2');
  }
  @font-face {
      font-family: 'Inter';
      font-weight: 800;
      font-style: normal;
      font-display: swap;
      src: url('https://fonts.gstatic.com/s/inter/v12/UcCO3Fwr2l6f8IJ1lkZd4IPfQ1FZ.woff2') format('woff2');
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
