import React, { Component } from 'react';
import PlacesIndex from "./app/places/index";

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
