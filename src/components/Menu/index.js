import React from "react";
import { StyledMenu } from "./styles";

const Menu = ({ items }) => (
    <StyledMenu>
        {items.map((item, i) => (
            <li key={i}>
                <a href={item.url}>{item.title}</a>
            </li>
        ))}
    </StyledMenu>
);

export default Menu;
