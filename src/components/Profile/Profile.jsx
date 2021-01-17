import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import clases from './Profile.module.css';




const Profile = () => {
    return (
        <div className={clases.content}>
            <div>
                <img src='https://media.routard.com/image/67/1/fb-canada-parcs.1473671.jpg'></img>
            </div>
            <div>
                ava + discription
      </div>
      <MyPosts/>
           </div>
           
    )
}

export default Profile;