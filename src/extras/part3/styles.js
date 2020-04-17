import styled from "styled-components";

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledModal = styled.div`
    margin: 0 10px;
    background: #f6f9fc;
    box-shadow: 0px 2px 70px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    overflow: hidden;
    width: 600px;

    h3 {
        color: #2f5472;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        padding: 16px;
    }
`;

export const StyledHeader = styled.div`
    position: relative;
`;

export const Cross = styled.div`
    cursor: pointer;
    position: absolute;
    top: 16px;
    right: 16px;
    width: 13px;
    height: 13px;

    :after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 2px;
        height: 14px;
        background: #2f5472;
        transform: rotate(-135deg);
        margin-left: 6px;
    }
    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 2px;
        height: 14px;
        background: #2f5472;
        transform: rotate(-45deg);
        margin-left: 6px;
    }
`;

export const Row = styled.div`
    padding: 6px 16px;
    display: flex;
    flex-direction: row;

    :nth-of-type(odd) {
        background-color: #ffffff;
    }

    .label {
        min-width: 120px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        color: #42505c;
        opacity: 0.5;
    }

    .value {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: #2f5472;
    }
`;

export const StyledParagraph = styled.p`
    padding: 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    color: #9b9b9b;
`;

export const ButtonsWrapper = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const Button = styled.button`
    margin-left: 10px;
    padding: 0 16px;
    height: 32px;
    border-radius: 4px;
    outline: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;

    ${({ secondary }) => {
        if (secondary) {
            return `
                border: 1px solid #2F5472;
                color: #2F5472;
                background: #ffffff;
            `;
        } else {
            return `
                color: #ffffff;
                background: #2F5472;
            `;
        }
    }}
`;
