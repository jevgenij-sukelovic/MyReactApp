import React from 'react';
import clases from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElement = props.PostsData.map(p => < Post message={p.post} likesCount={p.likes}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return (

        <div className={clases.myPosts}>
            <div>
                <h3>My posts</h3>
            </div>

            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={clases.post}>

                {postsElement}

            </div>


        </div>


    )
}

export default MyPosts;