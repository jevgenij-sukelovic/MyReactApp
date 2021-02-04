import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updatePostActionCreator} from "../../../state/profilePageReducer";




const MyPosts = (props) => {


    let postsElement = props.PostsData.map(p => < Post message={p.post} likesCount={p.likes}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updatePostActionCreator(text))


    }

    return (

        <div className={classes.myPosts}>
            <div>
                <h3>My posts</h3>
            </div>

            <div>
                <textarea onChange={onPostChange} ref={newPostElement} placeholder={'Enter your post'} value={props.onPostChange}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={classes.post}>

                {postsElement}

            </div>


        </div>


    )
}

export default MyPosts;