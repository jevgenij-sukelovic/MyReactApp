import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Navbar/NavBar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import state from "./state/State";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Nav/>
                <div className='app-content'>

                    <Route path='/profile' render={() => < Profile PostsData={props.state.profilePage.PostsData}
                                                                   dispatch={props.dispatch}
                                                                   onPostChange={props.state.newPostMessage.onPostChange}/>}/>
                    <Route path='/dialogs' render={() => < Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                                   messagesData={props.state.dialogsPage.messagesData}
                                                                   dispatch={props.dispatch}
                                                                   currentPost={props.state.dialogsPage.addMessage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/friends' render={() => < Friends myFriends={props.state.sideBar.myFriends}/>}/>


                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
