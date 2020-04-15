import React from "react";
import { StyledButton, PlusIcon } from "./styles";

export default ({ text, secondary, large, plus, disabled, handleClick }) => (
    <StyledButton
        secondary={secondary}
        large={large}
        plus={plus}
        disabled={disabled}
        onClick={handleClick}
    >
        {plus && <PlusIcon />}
        {text}
    </StyledButton>
);
