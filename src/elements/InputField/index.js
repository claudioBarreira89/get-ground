import React from "react";
import { StyledInput, StyledSpan } from "./styles";

export default ({ label, value, handleChange }) => (
    <>
        {label && <StyledSpan>{label}</StyledSpan>}
        <StyledInput value={value} onChange={handleChange} />
    </>
);
