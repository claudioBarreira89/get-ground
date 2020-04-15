import React from "react";
import { InputField, Column, Button } from "../../elements";
import { FormWrapper, ButtonWrapper } from "./styles";

export default ({ title, formText }) => {
    return (
        <>
            <h2>{title}</h2>
            <FormWrapper>
                <Column flex={1}>
                    <InputField label={formText.firstName} />
                </Column>
                <Column flex={1}>
                    <InputField label={formText.lastName} />
                </Column>
            </FormWrapper>

            <FormWrapper>
                <Column flex={1}>
                    <InputField label={formText.email} />
                </Column>
                <Column flex={1}>
                    <ButtonWrapper>
                        <Button text={formText.button} large plus />
                    </ButtonWrapper>
                </Column>
            </FormWrapper>
        </>
    );
};
