import MapComp from "./Component/MapComp"
import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div>
      <h1>Google Map</h1>
        <MapComp />
      </div>
    );
  }
}

export default App;