import styled from "styled-components";
import { colors } from "../../styles";

export const StyledMenu = styled.ul`
    display: flex;
    list-style: none;
    padding: 0 15px;

    li a {
        font-size: 13px;
        line-height: 24px;
        color: ${colors.white};
        padding: 0 10px;
        text-decoration: none;
    }

    li a:hover {
        text-decoration: underline;
    }
`;
