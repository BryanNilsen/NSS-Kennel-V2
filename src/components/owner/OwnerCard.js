import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Owner: {this.props.owner.name}</h3>
          <p>{this.props.owner.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;