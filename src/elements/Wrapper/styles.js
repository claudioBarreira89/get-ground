import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 658px;
    height: 100%;
    margin: auto;
    padding: 10px;
    flex-direction: ${({ flexDirection }) => flexDirection || "column"};
    justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};

    ${({ alignCenter }) => alignCenter && "align-items: center"};
`;
