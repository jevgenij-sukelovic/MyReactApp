import React from 'react';
import clases from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    let PostsData = [
        {id: 1, post: 'Hi, I am fine', likes: 12},
        {id: 2, post: 'How are you?', likes: 2}
    ]
    let postsElement = PostsData.map(p => < Post message={p.post} likesCount={p.likes}/>)

    return (

        <div className={clases.myPosts}>
            <div>
                <h3>My posts</h3>
            </div>

            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={clases.post}>

                {postsElement}

            </div>


        </div>


    )
}

export default MyPosts;