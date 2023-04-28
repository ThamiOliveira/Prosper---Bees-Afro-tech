import React from "react";
import './Header.css';
import BotaoMenu from "../BotaoMenu/BotaoMenu";

function Header(props) {
    return (
        <header>
            <BotaoMenu nome="Home" />
            <BotaoMenu nome="Catalogo" />

        </header>
    )
}

export default Header;