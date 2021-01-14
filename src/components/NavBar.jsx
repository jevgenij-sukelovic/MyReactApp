import React from 'react';
import clases from './Navbar.module.css';


const Nav = () => {
    return (
        <nav className={clases.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>



        </nav>
    )
}

export default Nav;