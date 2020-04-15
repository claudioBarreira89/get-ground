import React from "react";
import { StyledButton } from "./styles";

export default ({ text, secondary }) => (
    <StyledButton secondary={secondary}>{text}</StyledButton>
);
