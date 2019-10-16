import React from 'react'
import './App.css';

import NavBar from './components/nav-bar/nav-bar.component';
import ApodContainer from './components/apod-container/apod-container.component';
import HeaderContainer from './components/header-container/header-container.component';


class App extends React.Component{
  render() {
    return(
      <div>
        <NavBar />
        <HeaderContainer />
        <ApodContainer />
      </div>
      
    )
  }
}

export default App;
