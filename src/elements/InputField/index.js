import React from "react";
import { StyledInput, StyledSpan } from "./styles";

const InputField = ({ label, value, handleChange }) => (
    <>
        {label && <StyledSpan>{label}</StyledSpan>}
        <StyledInput value={value} onChange={handleChange} />
    </>
);

export default InputField;
