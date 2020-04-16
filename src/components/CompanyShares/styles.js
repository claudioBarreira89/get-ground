import styled from "styled-components";
import { colors } from "../../styles";

export const ShareholdersTableWrapper = styled.div`
    margin-bottom: 30px;
`;

export const ShareholdersTableHeader = styled.div`
    display: flex;
    padding: 0 20px 20px 40px;

    > div {
        font-size: 12px;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0.4px;
        text-transform: uppercase;
    }
`;

export const ColumnTitle = styled.div`
    width: 85px;
    margin-left: 10px;
    text-align: center;
`;

export const StyledRow = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 20px 15px 40px;

    ${({ first, last }) =>
        first
            ? `border: 1px solid ${colors.gray}; border-radius: 5px;`
            : !last && `border-bottom: 1px solid ${colors.gray};`}
`;

export const StyledName = styled.h3`
    color: ${colors.greenLight};
    text-transform: uppercase;
    letter-spacing: 2.25px;
    line-height: 30px;
`;

export const StyledEmail = styled.div`
    font-size: 11px;
    letter-spacing: 0.7px;
`;

export const InputWrapper = styled.div`
    display: flex;
`;

export const StyledInput = styled.div`
    width: 85px;
    height: 47px;
    margin-left: 20px;
    border-radius: 5px;
    background: ${colors.gradientOrange};

    input {
        text-align: center;
    }

    > div {
        cursor: pointer;
    }

    > * {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border: 0;
        background-color: transparent;
        outline: 0;
        padding: 10px;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.9px;
        color: ${colors.blueDark};
        font-weight: 600;
    }
`;
