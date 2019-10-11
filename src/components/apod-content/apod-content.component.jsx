import React from 'react';

import './apod-content.styles.scss';

const ApodContent = ({ url, title, explanation, date, ...props}) => {
    return(
        <div class="content-container">
            <div className="image-container">
                <img src={url} alt="" class="image" />
            </div>
            <div className="description-container">
                <h1>{title}</h1>
                <h5>{date}</h5>
                <p>{explanation}</p>
            </div>
        </div>
        
        );
}

export default ApodContent;