import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Location: {this.props.location.name}</h3>
          <p>{this.props.location.address}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close Location</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;