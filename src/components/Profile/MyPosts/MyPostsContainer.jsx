import React from 'react';
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = (props) => {


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
}*/
let mapStateToProps = (state)=>{
    return{
        PostsData: state.profilePage.PostsData,
        value: state.profilePage.onPostChange
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        addPost: ()=>{ dispatch(addPostActionCreator())},
        onPostChange: (text) => {dispatch(updatePostActionCreator(text))}
    }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default SuperMyPostsContainer;