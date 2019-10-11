import React from 'react'
import './App.css';

import ApodContainer from './components/apod-container/apod-container.component';

class App extends React.Component{
  render() {
    return(
      <div>
        <ApodContainer />
      </div>
      
    )
  }
}

export default App;
