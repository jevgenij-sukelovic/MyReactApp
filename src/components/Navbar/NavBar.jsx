import React from 'react';
import clases from './Navbar.module.css';


const Nav = () => {
    return (
        <nav className={clases.nav}>
            <div className={clases.item}>
                <a href="/profile"> Profile </a>
            </div>
            <div className={clases.item}>
                <a href="dialogs"> Messages </a>
            </div>
            <div className={clases.item}>
                <a href="/news">News</a>
            </div>
            <div className={clases.item}>
                <a href="/music">Music</a>
            </div>



        </nav>
    )
}

export default Nav;