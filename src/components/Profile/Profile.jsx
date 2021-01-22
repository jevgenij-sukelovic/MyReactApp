import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import clases from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profile";


const Profile = () => {
    return (
        <div className={clases.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>

    )
}

export default Profile;