import React from "react";
import logo from '../../logo.svg'
import './header.css';

function Header() {
    return (
        <header className='App-header'>
            <img src={logo} className="App-logo" alt="logo"/>
            Weather by City name1
        </header>
    );
}

export default Header;
