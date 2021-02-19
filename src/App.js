import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Navbar/NavBar';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UserContainer from "./components/Users/UserContainer";



const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Nav/>
                <div className='app-content'>

                    <Route path='/profile' render={() => < Profile />}/>
                    <Route path='/dialogs' render={() => < DialogsContainer />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/friends' render={() => < FriendsContainer />}/>
                    <Route path='/users' render={() => < UserContainer />}/>


                </div>


            </div>
        </BrowserRouter>
    );
}


export default App;
