import React from 'react';
import clases from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={clases.nav}>
            <div className={clases.item}>
                <NavLink to="/profile" activeClassName={clases.activLink}> Profile </NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="dialogs" activeClassName={clases.activLink}> Messages </NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="/news" activeClassName={clases.activLink}>News</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="/music" activeClassName={clases.activLink}>Music</NavLink>
            </div>



        </nav>
    )
}

export default Nav;