import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';


import './header-content.styles.scss';

const HeaderContent = () => {
    return(
        <div class="title">
            <ScrollAnimation animateIn="fadeIn" animateOnce="true" duration="3">
                <h1>Home Base</h1>
            </ScrollAnimation>
        </div> 
        
    );
}

export default HeaderContent;