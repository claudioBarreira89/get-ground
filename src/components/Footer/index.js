import React from "react";
import { Wrapper, Column, Button } from "../../elements";
import { StyledFooter } from "./styles";

const Footer = ({ next, back, changePage, setPage, currentPage, homeUrl }) => {
    return (
        <StyledFooter>
            <Wrapper flexDirection={"row"} justifyContent={"flex-end"}>
                <Column flex={1}>
                    <Button
                        medium
                        text="Extras"
                        handleClick={() => setPage(2)}
                    />
                </Column>
                <Column>
                    <Button
                        text={back}
                        medium
                        strong
                        secondary
                        colored
                        handleClick={() => {
                            if (currentPage === 0) {
                                window.location.assign(homeUrl);
                            } else {
                                changePage(false);
                            }
                        }}
                    />
                </Column>
                <Column>
                    <Button
                        text={next}
                        medium
                        strong
                        colored
                        handleClick={() => changePage(true)}
                    />
                </Column>
            </Wrapper>
        </StyledFooter>
    );
};

export default Footer;
