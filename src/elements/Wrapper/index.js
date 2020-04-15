import React from "react";
import { StyledWrapper } from "./styles";

export default ({ children, alignCenter }) => (
    <StyledWrapper alignCenter={alignCenter}>{children}</StyledWrapper>
);
