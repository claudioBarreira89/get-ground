import styled from "styled-components";

export const Paragraph = styled.p`
    margin-bottom: 20px;

    :last-child {
        margin-bottom: 0;
    }
`;

export const FormWrapper = styled.div`
    display: flex;
    margin: 0 -5px 15px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    height: 100%;

    align-items: flex-end;
    justify-content: center;
`;
