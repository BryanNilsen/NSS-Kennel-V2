import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Employee: {this.props.employee.name}</h3>
          <p>Info</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;