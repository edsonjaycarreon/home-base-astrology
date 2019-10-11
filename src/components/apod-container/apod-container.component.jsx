import React, { useState, useEffect } from 'react';

import './apod-container.styles.scss';

import ApodContentContainer from '../apod-content-container/apod-content-container.component';

const ApodContainer = () => {
    const [contents, setContent] = useState({});
    
    const fetchData = async () => {
        // const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=JCnOMNpV1hqN5z8dJZR85PtGYxW1bdJZOZ8cjP2i');
        // const data = await response.json();
        // setContent(data);

       await fetch('https://api.nasa.gov/planetary/apod?api_key=JCnOMNpV1hqN5z8dJZR85PtGYxW1bdJZOZ8cjP2i')
            .then(response => response.json())
            .then(data => setContent(data))
            .catch(error => console.log(error,'failed to fetch data'));
    }
    


    useEffect(() => {
       fetchData();
    },[]);

    



    return(
        <div className="container">
                <ApodContentContainer {...contents} />
        </div>
   );

}


export default ApodContainer;