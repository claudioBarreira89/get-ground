import React from "react";
import { StyledButton, PlusIcon } from "./styles";

export default ({
    text,
    secondary,
    colored,
    large,
    plus,
    disabled,
    medium,
    strong,
    handleClick
}) => (
    <StyledButton
        secondary={secondary}
        colored={colored}
        large={large}
        medium={medium}
        strong={strong}
        plus={plus}
        disabled={disabled}
        onClick={handleClick}
    >
        {plus && <PlusIcon />}
        {text}
    </StyledButton>
);
