import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Messages/MessageItem";




const Dialogs = (props) => {



    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageText = props.state.messagesData.map(m => <MessageItem message={m.message}/>)


    let newMessage = () =>{
        props.newMessage();

    }
    let addMessage = (event)=>{
        let text = event.target.value;
        props.addMessage(text)
    }

    return (


        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={classes.messages}>

                {messageText}

                <div>
                    <textarea onChange={addMessage} placeholder={'Enter your message'}
                              value={props.state.addMessage}></textarea>
                </div>

                <div>
                    <button onClick={newMessage}>add Message</button>
                </div>


            </div>


        </div>


    )


}

export default Dialogs;