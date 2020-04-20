import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./dialog/Dialog";
import Message from "./messages/Message";

class Dialogs extends React.Component {
    render = () => {
        return (
            <div className={classes.dialogsPage}>
                <div className={classes.dialogItems}>
                    {this.props.state.dialogsData.map(a=><Dialog user={a.user} id={a.id}/>)}
                </div>
                <div className={classes.messages}>
                    {this.props.state.messages.map(mes=><Message message={mes.message}/>)}
                </div>
            </div>
        );
    }
}

export default Dialogs;
