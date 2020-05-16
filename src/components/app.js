import React, { Component } from 'react';

import Header from "./headernavbar/header";
import Navbar from "./headernavbar/navbar";


class App extends Component {
  render() {
    return (
      <div className='app'>
        {this.props.children}
        <Header />
        <Navbar />      
      </div>
    );
  }
}


export default App;
