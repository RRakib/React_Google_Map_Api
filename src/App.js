import React, { Component } from 'react';
import {Map , GoogleApiWrapper} from "google-maps-react"

export class App extends Component {
  render() {
    const styleMap = {
      width: "80%",
      height: "70%",
      margin: "0 auto"
    }
    return (
      <div>
      <h1>Google Map</h1>
      <Map 
        google={this.props.google}
        zoom={14}
        style = {styleMap}
        initialCenter={{
          lat: 23.821463,
          lng: 90.419567
        }}
      />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(App);