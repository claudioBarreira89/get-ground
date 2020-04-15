import styled from "styled-components";

export const StyledColumn = styled.div`
    flex: ${({ flex }) => flex || "none"};
    padding: 0 5px;
`;
