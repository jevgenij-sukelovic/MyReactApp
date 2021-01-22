import React from 'react';
import clases from './Post.module.css';




const Post = (props) => {
    return (

        <div className={clases.item}>

            <img className={clases.item} src='https://www.pngfind.com/pngs/m/443-4438473_super-saiyan-goku-face-hd-png-download.png'/>

           {props.message}

            <div>
               <span>like</span> {props.likesCount}
            </div>
            
        </div>



    )
}

export default Post;