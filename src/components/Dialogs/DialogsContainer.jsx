import React from 'react'
import {addNewMessageActionCreator, NewMessageTextActionCreator} from "../../Redux/dialogsPageReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage


    let newMessage = () => {
        props.store.dispatch(addNewMessageActionCreator())

    }
    let addMessage = (text) => {
        props.store.dispatch(NewMessageTextActionCreator(text))
    }

    return (


        <Dialogs newMessage={newMessage} addMessage={addMessage} state={state}/>


    )


}

export default DialogsContainer;