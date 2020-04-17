import React from "react";
import { StyledButton, PlusIcon } from "./styles";

const Button = ({
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

export default Button;
