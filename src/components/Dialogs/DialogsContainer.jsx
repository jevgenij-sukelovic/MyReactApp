import React from 'react'
import {addNewMessageActionCreator, NewMessageTextActionCreator} from "../../Redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {



    return (
        <StoreContext.Consumer>{
            (store)=>{
                let state = store.getState().dialogsPage


                let newMessage = () => {
                    store.dispatch(addNewMessageActionCreator())

                }
                let addMessage = (text) => {
                    store.dispatch(NewMessageTextActionCreator(text))
                }

            return(
            <Dialogs newMessage={newMessage} addMessage={addMessage} state={state}/>
            )

        }
        }
        </StoreContext.Consumer>
    )


}

export default DialogsContainer;