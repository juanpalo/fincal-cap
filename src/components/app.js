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

// https://rails.devcamp.com/pt-full-stack-development-javascript-python-react/guide/sign-in-sign-up-component-setup
// 8:50 left
// rendered sign in component
