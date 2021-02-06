import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import clases from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div className={clases.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>

    )
}

export default Profile;