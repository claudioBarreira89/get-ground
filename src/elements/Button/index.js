import React from "react";
import { StyledButton, PlusIcon } from "./styles";

export default ({ text, secondary, large, plus }) => (
    <StyledButton secondary={secondary} large={large} plus={plus}>
        {plus && <PlusIcon />}
        {text}
    </StyledButton>
);
