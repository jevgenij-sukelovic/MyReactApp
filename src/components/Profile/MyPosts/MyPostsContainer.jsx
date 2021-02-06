import React from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let value = props.store.getState().profilePage.onPostChange;
    let PostsData = props.store.getState().profilePage.PostsData;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        props.store.dispatch(updatePostActionCreator(text))


    }

    return (

        <MyPosts onPostChange={onPostChange} addPost={addPost} PostsData={PostsData} value={value}/>


    )
}

export default MyPostsContainer;