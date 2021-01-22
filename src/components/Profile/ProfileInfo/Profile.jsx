import React from 'react';

import clases from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img src='https://media.routard.com/image/67/1/fb-canada-parcs.1473671.jpg'></img>
            </div>
            <div className={clases.avaDiscription}>
                ava + discription
            </div>

        </div>

    )
}

export default ProfileInfo;