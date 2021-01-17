import React from 'react';
import clases from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = () => {
    return (

    <div>
            My posts
        <div>
               <textarea></textarea>
               <button>Add post</button>
        </div>

            <Post message = 'Hi, I am fine'/>
            <Post message = 'How are you?'/>
            

    </div>


    )
}

export default MyPosts;