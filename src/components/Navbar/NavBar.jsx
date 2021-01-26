import React from 'react';
import clases from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import OnlineFriends from "../OnlineFriends/OnlineFriends";
import Friends from "../Friends/Friends";



const Nav = () => {
    return (
        <div>
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
        <nav className={clases.nav}>

                <div className={clases.friends}>
                    <NavLink to="/friends" activeClassName={clases.activLink}>
                    <h3>Friends</h3>
                    </NavLink>


                </div>

        </nav>

        </div>
    )
}

export default Nav;