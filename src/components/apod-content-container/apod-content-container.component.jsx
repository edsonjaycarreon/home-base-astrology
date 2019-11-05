import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './apod-content-container.styles.scss';

import ApodContent from '../apod-content/apod-content.component';

const ApodContentContainer = () =>{
    const [contents, setContent] = useState({});
    
    const fetchData = async () => {
       await fetch('https://api.nasa.gov/planetary/apod?api_key=JCnOMNpV1hqN5z8dJZR85PtGYxW1bdJZOZ8cjP2i')
            .then(response => response.json())
            .then(data => setContent(data))
            .catch(error => console.log(error,'failed to fetch data'));
    }

    useEffect(() => {
        fetchData();
     },[]);

    return (
      <ScrollAnimation animateIn="fadeInLeft" animateOnce="true">
        <div className="apod-content-container">
          <div className="head-title">ASTRONOMY PHOTO OF THE DAY</div>
          <ApodContent {...contents} />
        </div>
      </ScrollAnimation>
    );
}

export default ApodContentContainer;