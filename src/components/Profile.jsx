import React from 'react';
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
            <div>
                My posts
        <div>Newpost
          <div>
                        Post1
          </div>
                    <div>
                        Post2
          </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;