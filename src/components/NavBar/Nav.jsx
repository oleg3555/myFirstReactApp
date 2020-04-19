import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";

class Nav extends React.Component {
    render = () => {
        return (
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/newsFeed" activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item + " " + classes.square}>
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                </div>
            </nav>
        );
    };
}

export default Nav;