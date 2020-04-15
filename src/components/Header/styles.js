import styled from "styled-components";
import { colors } from "../../styles";
import background from "../../assets/images/bg.png";

export const StyledHeader = styled.div`
    width: 100%;
    height: 61px;
    background: ${colors.gradient};

    > div {
        height: 100%;
        background-image: url(${background});
    }
`;

export const StyledLogo = styled.img`
    height: 100%;
    width: 80px;
`;
