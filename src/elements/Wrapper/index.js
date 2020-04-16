import React from "react";
import { StyledWrapper } from "./styles";

export default ({ children, alignCenter, justifyContent, flexDirection }) => (
    <StyledWrapper
        alignCenter={alignCenter}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
    >
        {children}
    </StyledWrapper>
);
