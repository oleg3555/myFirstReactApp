import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render = () => {
        return (
            <header className={classes.header}>
                <img src='https://www.freelogodesign.org/Content/img/logo-samples/flooop.png'/>
            </header>
        );
    };
}

export default Header;