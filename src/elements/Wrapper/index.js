import React from "react";
import { StyledWrapper } from "./styles";

export default ({ children, alignCenter, flexDirection }) => (
    <StyledWrapper alignCenter={alignCenter} flexDirection={flexDirection}>
        {children}
    </StyledWrapper>
);
