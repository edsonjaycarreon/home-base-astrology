import React, { useState, useEffect } from 'react';

import './nav-bar.styles.scss';

const NavBar = () => { 
    const [scrollHeight, setScrollHeight] = useState({
        visible: true
    });

    useEffect(() => {
        window.onscroll = () => {
            const newScrollHeight = Math.ceil(window.scrollY /50) * 50;
            setScrollHeight({currentScrollHeight: newScrollHeight})
        }
    });
    
    return(
        <header id="header" className={`${scrollHeight.currentScrollHeight > 520 ? "header-sticky" : "header"}`}>
            <nav>
                <ul className="nav-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Explore</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;