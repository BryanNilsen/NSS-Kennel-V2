import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Location: </h3>
          <p>Address</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;