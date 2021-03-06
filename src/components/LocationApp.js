import React, { Component } from 'react';
import MapApp from './MapApp';
import Geolocalizacion from './Geolocalizacion';

class LocationApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '0,0',
      error: null,
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            value: position.coords.latitude + ',' + position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState(
          {error: error.message}
        )
      );
    }
  }
  
  render() {
    // console.log(this.state.value)
    return (
      <div>
      <MapApp app_id = "75jBHP2yBdJfYYdm26wV" app_code = "PP2nozpXhsRLbtdZWSoWxg" app_coord = {this.state.value} app_zoom = "14" />
      <Geolocalizacion app_id = "75jBHP2yBdJfYYdm26wV" app_code = "PP2nozpXhsRLbtdZWSoWxg"/>
      </div>
    );
  }
}

export default LocationApp;