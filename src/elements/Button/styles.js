import styled from "styled-components";
import { colors } from "../../styles";

export const StyledButton = styled.button`
    position: relative;    
    height: 30px;
    padding: 0px 14px;
    border-radius: 17px;
    line-height: 1;
    outline: 0;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    ${({ strong }) => strong && `font-size: 14px; font-weight: 600;`}

   

    ${({ plus }) =>
        plus &&
        `
        text-align: left; 
        padding-left: 45px;
    `}
    ${({ large, medium }) => {
        if (large) {
            return "min-width: 220px;";
        } else if (medium) {
            return "min-width: 133px;";
        }
    }}
    ${({ secondary, colored }) => {
        if (secondary) {
            return `
            background-color: transparent;
            border: ${
                colored
                    ? `2px solid ${colors.blueDark}`
                    : `1px solid ${colors.white}`
            };
            color: ${colored ? colors.blueDark : colors.white};
    
            :hover {
                background-color: ${colored ? colors.blueDark : colors.white};
                color: ${colored ? colors.white : colors.greenLight};
            }
            `;
        } else {
            return `
            ${
                colored
                    ? `background: ${colors.gradient};`
                    : `background-color: ${colors.gray};`
            }
            border: 0;
            color: ${colored ? colors.white : colors.black};

            :hover {
                ${
                    colored
                        ? `opacity: .7;`
                        : `background-color: ${colors.grayMedium};`
                }
            }
            `;
        }
    }}
    
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
