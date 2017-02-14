import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlacesIndex from "./places/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlacesIndex initialTag="camping" />
      </div>
    );
  }
}

export default App;
