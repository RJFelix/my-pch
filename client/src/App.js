import React, { Component } from 'react';
import './App.css';
import PlacesIndex from "./app/places/";

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
