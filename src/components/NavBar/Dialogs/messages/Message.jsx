import React from 'react';
import classes from './Message.module.css';

class Message extends React.Component {
    render = () => {
        return (
            <div className={classes.message}>
                {this.props.message}
            </div>
        );
    }
}

export default Message;
