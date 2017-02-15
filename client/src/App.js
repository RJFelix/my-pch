import React, { Component } from 'react';
import PlacesIndex from "./app/places/index";
import Header from "./app/shared/components/Header";

class App extends Component {
  render() {
    return (
      <div className="ui container App">
        <Header />
        <PlacesIndex initialTag="camping" />
      </div>
    );
  }
}

export default App;
