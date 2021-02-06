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
import state from "./Redux/Store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Nav/>
                <div className='app-content'>

                    <Route path='/profile' render={() => < Profile store = {props.store} /> }/>
                    <Route path='/dialogs' render={() => < DialogsContainer store = {props.store}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/friends' render={() => < Friends
                        myFriends={props.state.friendsPage.myFriends}/>}/>


                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
