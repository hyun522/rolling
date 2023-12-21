import { createGlobalStyle } from 'styled-components';

import PretendardBlackWoff from './assets/fonts/pretendard/woff/Pretendard-Black.woff';
import PretendardBoldWoff from './assets/fonts/pretendard/woff/Pretendard-Bold.woff';
import PretendardExtraBoldWoff from './assets/fonts/pretendard/woff/Pretendard-ExtraBold.woff';
import PretendardExtraLightWoff from './assets/fonts/pretendard/woff/Pretendard-ExtraLight.woff';
import PretendardLightWoff from './assets/fonts/pretendard/woff/Pretendard-Light.woff';
import PretendardMediumWoff from './assets/fonts/pretendard/woff/Pretendard-Medium.woff';
import PretendardRegularWoff from './assets/fonts/pretendard/woff/Pretendard-Regular.woff';
import PretendardSemiBoldWoff from './assets/fonts/pretendard/woff/Pretendard-SemiBold.woff';
import PretendardThinWoff from './assets/fonts/pretendard/woff/Pretendard-Thin.woff';

import PretendardBlackWoff2 from './assets/fonts/pretendard/woff2/Pretendard-Black.woff2';
import PretendardBoldWoff2 from './assets/fonts/pretendard/woff2/Pretendard-Bold.woff2';
import PretendardExtraBoldWoff2 from './assets/fonts/pretendard/woff2/Pretendard-ExtraBold.woff2';
import PretendardExtraLightWoff2 from './assets/fonts/pretendard/woff2/Pretendard-ExtraLight.woff2';
import PretendardLightWoff2 from './assets/fonts/pretendard/woff2/Pretendard-Light.woff2';
import PretendardMediumWoff2 from './assets/fonts/pretendard/woff2/Pretendard-Medium.woff2';
import PretendardRegularWoff2 from './assets/fonts/pretendard/woff2/Pretendard-Regular.woff2';
import PretendardSemiBoldWoff2 from './assets/fonts/pretendard/woff2/Pretendard-SemiBold.woff2';
import PretendardThinWoff2 from './assets/fonts/pretendard/woff2/Pretendard-Thin.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src: local('Pretendard Black'), url(${PretendardBlackWoff2}) format('woff2'), url(${PretendardBlackWoff}) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: local('Pretendard ExtraBold'), url(${PretendardExtraBoldWoff2}) format('woff2'), url(${PretendardExtraBoldWoff}) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: local('Pretendard Bold'), url(${PretendardBoldWoff2}) format('woff2'), url(${PretendardBoldWoff}) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: local('Pretendard SemiBold'), url(${PretendardSemiBoldWoff2}) format('woff2'), url(${PretendardSemiBoldWoff}) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: local('Pretendard Medium'), url(${PretendardMediumWoff2}) format('woff2'), url(${PretendardMediumWoff}) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local('Pretendard Regular'), url(${PretendardRegularWoff2}) format('woff2'), url(${PretendardRegularWoff}) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: local('Pretendard Light'), url(${PretendardLightWoff2}) format('woff2'), url(${PretendardLightWoff}) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src: local('Pretendard ExtraLight'), url(${PretendardExtraLightWoff2}) format('woff2'), url(${PretendardExtraLightWoff}) format('woff');
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: local('Pretendard Thin'), url(${PretendardThinWoff2}) format('woff2'), url(${PretendardThinWoff}) format('woff');
  }

  * {
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html,
  body {
    min-height: 100%;
    min-height: 100svh;
    line-height: 1;
    font-family: Pretendard, sans-serif;
  }

  image {
    vertical-align:top;
  }

  ul, li, ol {
    list-style:none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  input,
  button,
  textarea {
    border:none;
  }
  
  input:focus,
  input:active,
  button:focus,
  button:active,
  textarea:focus,
  textarea:active {
    outline: none;
    box-shadow: none;
  }
`;

export default GlobalStyle;
