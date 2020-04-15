import styled from "styled-components";
import { colors } from "../../styles";

export const StyledInput = styled.input`
    width: 100%;
    outline: 0;
    border-radius: 5px;
    border: 1px solid ${colors.blueDark};
    padding: 8px 17px;
    font-size: 14px;
`;

export const StyledSpan = styled.span`
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1.25px;
    color: ${colors.greenLight};
    padding-left: 18px;
    line-height: 30px;
`;
