import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Navbar/NavBar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";


const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>

            <Header/>
            <Nav/>
            <div className='app-content'>

                <Route path='/profile' component={Profile}/>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>

            </div>


        </div>
        </BrowserRouter>
    );
}


export default App;
