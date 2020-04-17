import React from "react";
import { StyledColumn } from "./styles";

const Column = ({ children, flex, textAlign }) => (
    <StyledColumn flex={flex} textAlign={textAlign}>
        {children}
    </StyledColumn>
);

export default Column;
