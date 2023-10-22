import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"

function Header(props) {
    return (
        <header>

            <NavLink to={"/"}>Contacts</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Register</NavLink>
            <NavLink to={"/me"}>Me</NavLink>

        </header>
    );
}

export default Header;