import React from "react";
import {
    StyledRow,
    StyledName,
    StyledEmail,
    InputWrapper,
    StyledInput
} from "./styles";
import { Column } from "../../elements";

export default ({
    shareholder,
    first,
    last,
    handleChange,
    handleClick,
    directorInput
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
                <StyledInput>
                    <input
                        onChange={e => {
                            handleChange(
                                e.target.value,
                                shareholder.id,
                                e.target
                            );
                        }}
                        value={shareholder.share === 0 ? "" : shareholder.share}
                    />
                </StyledInput>
                <StyledInput>
                    <div
                        onClick={() =>
                            handleClick(shareholder.id, !shareholder.director)
                        }
                    >
                        {shareholder.director
                            ? directorInput[0]
                            : directorInput[1]}
                    </div>
                </StyledInput>
            </InputWrapper>
        </Column>
    </StyledRow>
);
