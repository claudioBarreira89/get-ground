import { createGlobalStyle } from "styled-components";
import colors from "./colors";

import fontLight from "../assets/fonts/OpenSans-Light.ttf";
import fontRegular from "../assets/fonts/OpenSans-Regular.ttf";
import fontSemiBold from "../assets/fonts/OpenSans-SemiBold.ttf";
import fontBold from "../assets/fonts/OpenSans-Bold.ttf";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: OpenSans;
        font-weight: 300;
        src: url(${fontLight}) format('truetype');
    }

    @font-face {
        font-family: OpenSans;
        font-weight: 400;
        src: url(${fontRegular}) format('truetype');
    }

    @font-face {
        font-family: OpenSans;
        font-weight: 500;
        src: url(${fontSemiBold}) format('truetype');
    }

    @font-face {
        font-family: OpenSans;
        font-weight: 600;
        src: url(${fontBold}) format('truetype');
    }

    body, html {
        font-family: OpenSans;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${colors.black};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        list-style-type: none;
    }
      
    p {
        color: ${colors.grayDark};
    }


    h1 {
        color: ${colors.teal};
        font-weight: 400;
    }
  
    h2 {
        font-size: 2.125rem;
        padding: 0 1rem;
    }
  
    h3 {
        font-size: 1.5rem;
        padding: 0 .5rem;
        font-weight: 300;
    }
`;

export { default as colors } from "./colors";
export default GlobalStyles;
