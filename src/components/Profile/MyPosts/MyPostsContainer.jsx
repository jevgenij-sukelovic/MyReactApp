import React from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>{
            (store) =>{

                let value = store.getState().profilePage.onPostChange;
                let PostsData = store.getState().profilePage.PostsData;

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange = (text) => {
                    store.dispatch(updatePostActionCreator(text))
                }
                return(
            <MyPosts onPostChange={onPostChange} addPost={addPost} PostsData={PostsData} value={value}/>
            )
        }
        }

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;