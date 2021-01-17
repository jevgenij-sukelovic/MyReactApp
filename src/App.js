import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Navbar/NavBar';
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
    return (<div className='app-wrapper'>

            <Header/>
            <Nav/>
            <div className='app-content'>

                < Dialogs/>

            </div>

          {/* <Profile />*/}

        </div>
    );
}


export default App;
