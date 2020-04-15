import React from "react";
import { StyledHeader, StyledLogo } from "./styles";
import { Menu } from "../";
import { Wrapper, Column, Button } from "../../elements";
import logo from "../../assets/images/logo.svg";

const Header = ({ menu, homeUrl, buttonText }) => {
    return (
        <StyledHeader>
            <div>
                <Wrapper alignCenter flexDirection="row">
                    <Column>
                        <a href={homeUrl}>
                            <StyledLogo alt="" src={logo} />
                        </a>
                    </Column>
                    <Column flex={1}>
                        <Menu items={menu} />
                    </Column>
                    <Column>
                        <Button text={buttonText} secondary />
                    </Column>
                </Wrapper>
            </div>
        </StyledHeader>
    );
};

export default Header;
