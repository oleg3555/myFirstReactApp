import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

class Dialog extends React.Component {
    render = () => {
        return (
            <div className={classes.dialogItem}>
                <NavLink to={"/dialogs/"+this.props.id} activeClassName={classes.active}>{this.props.user}</NavLink>
            </div>
        );
    }
}

export default Dialog;
