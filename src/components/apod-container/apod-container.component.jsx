import React, { useState } from 'react';

import './apod-container.styles.scss';

class ApodContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            contents: [],
        };
    }

    async componentDidMount(){
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=JCnOMNpV1hqN5z8dJZR85PtGYxW1bdJZOZ8cjP2i');
        const data = await response.json();
        this.setState({contents: data});
    }

    render(){
        const apodData = this.state;
        return(
            <div className="container">
                <div className="dark-overlay">

                </div>
            </div>
        )
    }
}


export default ApodContainer;