import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import OnlineFriends from "../Friends/OnlineFriends/OnlineFriends";
import Friends from "../Friends/Friends";



const Nav = () => {
    return (
        <div>
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activLink}> Profile </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="dialogs" activeClassName={classes.activLink}> Messages </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.activLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.activLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" activeClassName={classes.activLink}>Users</NavLink>
            </div>




        </nav>
        <nav className={classes.nav}>

                <div className={classes.friends}>
                    <NavLink to="/friends" activeClassName={classes.activLink}>
                    <h3>Friends</h3>
                    </NavLink>


                </div>

        </nav>

        </div>
    )
}

export default Nav;