import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Messages/MessageItem";






const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Rick'},
        {id: 2, name: 'Morty'},
        {id: 3, name: 'Ralph'},
        {id: 4, name: 'Sarah'},
    ]
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is Your learning'},
        {id: 3, message: "What's up"},

    ]
    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageText = messagesData.map(m => <MessageItem message={m.message}/>)


    return (


        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>

            <div className={classes.messages}>

                {messageText}

            </div>


        </div>


    )


}

export default Dialogs;