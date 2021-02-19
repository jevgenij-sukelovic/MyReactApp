import React from 'react'
import {addNewMessageActionCreator, NewMessageTextActionCreator} from "../../Redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



/*const DialogsContainer = () => {

const (func)

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


}*/

let mapSateToProps = (state)=>{

    return {
        dialogsPage: state.dialogsPage,
        addMessageValue: state.dialogsPage.addMessage
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        newMessage: ()=>{dispatch(addNewMessageActionCreator())},
        addMessage: (text)=>{dispatch(NewMessageTextActionCreator(text))}

    }

}

const SuperDialogsContainer = connect (mapSateToProps, mapDispatchToProps) (Dialogs);

export default SuperDialogsContainer;