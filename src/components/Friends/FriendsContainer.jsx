import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";


/*const FriendsContainer = () => {
    return(
        <StoreContext.Consumer>{
            (store)=>{

            let myFriends = store.getState().friendsPage.myFriends;

                    return(
                        <Friends myFriends={myFriends}/>
                        )

        }
            }
        </StoreContext.Consumer>
    )
}*/
let mapStateToProps = (state)=>{
    return{
        myFriends: state.friendsPage.myFriends
    }
}


const SuperFriendsContainer = connect (mapStateToProps)(Friends)

export default SuperFriendsContainer;