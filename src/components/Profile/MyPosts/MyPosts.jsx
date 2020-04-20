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
                        {this.props.postData.map(post=><Post message={post.message} likesCount={post.likesCount}/>)}
                    </div>
                </div>
        );
    };
}

export default MyPosts;