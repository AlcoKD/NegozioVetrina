import React, { Component } from 'react';
import Navbar from './Components/navbar';
import LandingPage from './Components/landingPage';
import Info from './Components/info';
import Contacts from './Components/contacts';


class App extends Component {

  render() {
    return(
      <div id='app-container'>
        <Navbar />
         <LandingPage />
          <Info />
           <Contacts />
      </div>
    );
  }  
}

export default App;


