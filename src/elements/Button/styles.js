import styled from "styled-components";
import { colors } from "../../styles";

export const StyledButton = styled.button`
    height: 30px;
    padding: 8px 14px;
    border-radius: 17px;
    line-height: 1;
    outline: 0;
    cursor: pointer;

    ${({ secondary }) =>
        secondary
            ? `
        background-color: transparent;
        border: 1px solid ${colors.white};
        color: ${colors.white};
        `
            : `
        background-color: ${colors.gray};
        border: 0;
        color: ${colors.black};
        `}
`;
