import React from "react";
import {
    StyledRow,
    StyledName,
    StyledEmail,
    InputWrapper,
    StyledInput,
    ErrorBlock
} from "./styles";
import { Column } from "../../elements";

const ShareholderRow = ({
    shareholder,
    first,
    last,
    handleChange,
    handleClick,
    directorInput,
    errorMessage
}) => (
    <StyledRow first={first} last={last}>
        <Column flex={1}>
            <StyledName>
                {shareholder.firstName} {shareholder.lastName}
            </StyledName>
            <StyledEmail>{shareholder.email}</StyledEmail>
        </Column>
        <Column>
            <InputWrapper>
                <StyledInput error={shareholder.error}>
                    <input
                        onChange={e => {
                            handleChange(e.target.value, shareholder.id);
                        }}
                        value={shareholder.share === 0 ? "" : shareholder.share}
                    />
                </StyledInput>
                <StyledInput>
                    <div
                        onClick={() =>
                            handleClick(shareholder.id, !shareholder.director)
                        }
                        dataTestId={"directorText"}
                    >
                        {shareholder.director
                            ? directorInput[0]
                            : directorInput[1]}
                    </div>
                </StyledInput>
            </InputWrapper>
        </Column>
        {shareholder.error && (
            <ErrorBlock dataTestId={"errorBlock"}>
                <Column>{errorMessage}</Column>
            </ErrorBlock>
        )}
    </StyledRow>
);

export default ShareholderRow;
