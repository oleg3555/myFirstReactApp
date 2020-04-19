import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

class MyPosts extends React.Component {
    render = () => {
        return (
                <div>
                    My posts
                    <div>
                        <textarea></textarea>
                        <button>Add</button>
                        <button>Remove</button>
                    </div>
                    <div className={classes.posts}>
                        <Post message="how are you?" likesCount={0}/>
                        <Post message="Hello" likesCount={23}/>
                        <Post message="I'm fine" likesCount={14}/>
                    </div>
                </div>
        );
    };
}

export default MyPosts;