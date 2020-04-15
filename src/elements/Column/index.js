import React from "react";
import { StyledColumn } from "./styles";

export default ({ children, flex }) => (
    <StyledColumn flex={flex}>{children}</StyledColumn>
);
