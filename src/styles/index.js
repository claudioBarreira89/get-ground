import styled, { createGlobalStyle } from "styled-components";
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


    h1 {
        color: ${colors.blueDark};
        font-size: 26px;
        font-weight: 400;
        margin-bottom: 20px;
        line-height: 44px;
    }

    h2 {
        color: ${colors.blueDark};
        font-size: 22px;
        font-weight: 400;
        margin-bottom: 20px;
        line-height: 44px;
    }
`;

export const Content = styled.div`
    padding: 50px 0 70px;
`;

export { default as colors } from "./colors";
export default GlobalStyles;
