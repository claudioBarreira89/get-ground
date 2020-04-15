import React from "react";
import { StyledInput, StyledSpan } from "./styles";

export default ({ label }) => (
    <>
        {label && <StyledSpan>{label}</StyledSpan>}
        <StyledInput />
    </>
);
