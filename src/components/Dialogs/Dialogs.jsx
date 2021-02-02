import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Messages/MessageItem";
import {addNewMessageActionCreator, NewMessageTextActionCreator} from "../../state/State";



const Dialogs = (props) => {



    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageText = props.messagesData.map(m => <MessageItem message={m.message}/>)

    let newMessageElement = React.createRef();
    let newMessage = () =>{
        props.dispatch(addNewMessageActionCreator())

    }
    let addMessage = ()=>{
        let text = newMessageElement.current.value;
        props.dispatch(NewMessageTextActionCreator(text))
    }

    return (


        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={classes.messages}>

                {messageText}

                <div>
                    <textarea onChange={addMessage} ref={newMessageElement} value={props.currentPost}></textarea>
                </div>

                <div>
                    <button onClick={newMessage}>add Message</button>
                </div>


            </div>


        </div>


    )


}

export default Dialogs;