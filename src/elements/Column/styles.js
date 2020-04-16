import styled from "styled-components";

export const StyledColumn = styled.div`
    flex: ${({ flex }) => flex || "none"};
    text-align ${({ textAlign }) => textAlign || "left"};
    padding: 0 5px;
`;
