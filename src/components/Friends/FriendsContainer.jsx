import React from 'react';
import Friends from "./Friends";
import StoreContext from "../../StoreContext";


const FriendsContainer = () => {
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
}

export default FriendsContainer;