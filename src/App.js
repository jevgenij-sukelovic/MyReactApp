import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Header from './components/header';
import Nav from './components/NavBar';






const App = () => {
  return (<div className='app-wrapper'>

    <Header />
    <Nav />
    <Profile />

  </div>
  );
}


export default App;
