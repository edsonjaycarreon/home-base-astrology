import React from 'react';

import './apod-content-container.styles.scss';

import ApodContent from '../apod-content/apod-content.component';

const ApodContentContainer = (props) =>{
    return(
    <div className="apod-content-container">
        <ApodContent {...props} />
    </div>
    )
}

export default ApodContentContainer;