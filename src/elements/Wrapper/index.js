import React from "react";
import { StyledWrapper } from "./styles";

const Wrapper = ({ children, alignCenter, justifyContent, flexDirection }) => (
    <StyledWrapper
        alignCenter={alignCenter}
        flexDirection={flexDirection}
        justifyContent={justifyContent}
    >
        {children}
    </StyledWrapper>
);

export default Wrapper;
