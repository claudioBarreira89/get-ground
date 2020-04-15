import styled from "styled-components";
import { colors } from "../../styles";

export const StyledButton = styled.button`
    position: relative;    
    height: 30px;
    padding: 8px 14px;
    border-radius: 17px;
    line-height: 1;
    outline: 0;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    :hover {
        background-color: ${colors.grayMedium};
    }

    ${({ plus }) =>
        plus &&
        `
        text-align: left; 
        padding-left: 45px;
    `}
    ${({ large }) => large && " min-width: 220px;"}
    ${({ secondary }) =>
        secondary
            ? `
        background-color: transparent;
        border: 1px solid ${colors.white};
        color: ${colors.white};

        :hover {
            background-color: ${colors.white};
            color: ${colors.greenLight};
        }
        `
            : `
        background-color: ${colors.gray};
        border: 0;
        color: ${colors.black};
        `}
    
    :active {
        opacity: .4;
    }


    ${({ disabled }) =>
        disabled &&
        `
        pointer-events: none;
        opacity: .3;
    `}
`;

export const PlusIcon = styled.div`
    width: 12px;
    height: 12px;
    position: absolute;
    left: 17px;

    :after {
        content: "";
        background-color: ${colors.grayDark};
        position: absolute;
        display: block;
        width: 12px;
        height: 3px;

        top: 50%;
        transform: translateY(-50%);
    }
    :before {
        content: "";
        background-color: ${colors.grayDark};
        position: absolute;
        display: block;
        width: 3px;
        height: 12px;

        left: 50%;
        transform: translateX(-50%);
    }
`;
