import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessage, addPost, newMessageText, updatePost} from './state/State'

export let rerenderEntireTree = (state) => {

ReactDOM.render(
    <React.StrictMode>
        <App state={state} addPost={addPost} updatePost={updatePost} addNewMessage={addNewMessage} newMessageText={newMessageText}/>
    </React.StrictMode>,
    document.getElementById('root'))
;}





