import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import clases from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profile";


const Profile = (props) => {

    return (
        <div className={clases.content}>
            <ProfileInfo/>
            <MyPosts PostsData={props.PostsData}

                     dispatch={props.dispatch}
                     /*addPost={props.addPost}*/
                     onPostChange={props.onPostChange}
                     /*updatePost={props.updatePost}*//>
        </div>

    )
}

export default Profile;