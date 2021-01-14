import React from 'react';
import clases from './Header.module.css';



const Header = () => {
    return (

        <header className={clases.header}>

            <img className={clases.img} src='http://www.newdesignfile.com/postpic/2013/01/free-online-3d-logo-design_54374.png'></img>

        </header>
    )
}

export default Header;