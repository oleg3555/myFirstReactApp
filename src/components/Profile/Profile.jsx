import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends React.Component {
    render = () => {
        return (
            <div className={classes.content}>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        );
    };
}

export default Profile;