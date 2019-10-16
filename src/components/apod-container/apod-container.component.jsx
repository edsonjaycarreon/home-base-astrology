import React from 'react';

import './apod-container.styles.scss';

import ApodContentContainer from '../apod-content-container/apod-content-container.component';

const ApodContainer = () => {
    return(
        <div className="container">
                <ApodContentContainer  />  
        </div>
   );
}
export default ApodContainer;