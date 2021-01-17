import React from 'react';
import clases from './Navbar.module.css';


const Nav = () => {
    return (
        <nav className={clases.nav}>
            <div className={clases.item}>
                <a>Profile</a>
            </div>
            <div className={clases.item}>
                <a>Messages</a>
            </div>
            <div className={clases.item}>
                <a>News</a>
            </div>
            <div className={clases.item}>
                <a>Music</a>
            </div>



        </nav>
    )
}

export default Nav;