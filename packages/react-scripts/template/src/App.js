import React, { Component } from 'react';
import EsriMap from 'esri/Map';
import MapView from 'esri/views/MapView';
import './App.css';

class App extends Component {
  componentDidMount() {
    const map = new EsriMap({
      basemap: "osm"
    });
    const view = new MapView({
      container: this.viewDiv,  // Reference to the scene div created in step 5
      map: map,  // Reference to the map object created before the scene
      zoom: 4,  // Sets zoom level based on level of detail (LOD)
      center: [15, 65]  // Sets center point of view using longitude,latitude
    });
  }

  render() {
   return (
      <div className="App" ref={(node) => {this.viewDiv = node;}} />
    );
  }
}

export default App;
