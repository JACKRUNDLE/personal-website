import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import "@fontsource/jetbrains-mono/400.css";

export default function NavigationBar() {
    

    return (
        <nav>
            <div className='NavLinksContainer'>
                <div className="myName">
                    <Link to={`/`} className="navLink">John Rundle</Link>
                </div>
                <div className="otherElements">
                    <Link to={`/`} className="navLink">HOME</Link>
                </div>
                <div className="otherElements">
                    <Link to={`/`} className="navLink">Resume</Link>
                </div>
                <div className="otherElements">
                    <Link to={`/`} className="navLink">Projects</Link>
                </div>
                <div className="otherElements">
                    <Link to={`/`} className="navLink">Contacts</Link>
                </div>
            </div>
            
        </nav>
    );
};