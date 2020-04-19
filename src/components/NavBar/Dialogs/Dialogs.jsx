import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./dialog/Dialog";
import Message from "./messages/Message";

class Dialogs extends React.Component {
    dialogsData=[
        {user:"Artem", id:"id1"},
        {user:"Dima", id:"id2"},
        {user:"Oleg", id:"id3"},
        {user:"Kate", id:"id4"},
        {user:"Andrew", id:"id5"}
        ];
    render = () => {
        return (
            <div className={classes.dialogsPage}>
                <div className={classes.dialogItems}>
                    {this.dialogsData.map(a=><Dialog user={a.user} id={a.id}/>)}
                </div>
                <div className={classes.messages}>
                    <Message message="Hello"/>
                    <Message message="How are you?"/>
                    <Message message="I'm nice"/>
                    <Message message="So what about you?"/>
                </div>
            </div>
        );
    }
}

export default Dialogs;
