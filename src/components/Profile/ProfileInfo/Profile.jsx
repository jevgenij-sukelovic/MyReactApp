import React from 'react';

import clases from './ProfileInfo.module.css';


const ProfileInfo = () => {
    let PostsData = [
        {id: 1, post: 'Hi, I am fine', likes: 12},
        {id: 2, post: 'How are you?', likes: 2}
    ]
    return (
        <div>

            <div>
                <img src='https://media.routard.com/image/67/1/fb-canada-parcs.1473671.jpg'></img>
            </div>


        </div>

    )
}

export default ProfileInfo;