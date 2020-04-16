import React from "react";
import { StyledColumn } from "./styles";

export default ({ children, flex, textAlign }) => (
    <StyledColumn flex={flex} textAlign={textAlign}>
        {children}
    </StyledColumn>
);
