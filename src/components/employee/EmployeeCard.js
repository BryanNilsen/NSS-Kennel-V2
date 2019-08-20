import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>{this.props.employee.name}</h3>
          {this.props.deleteEmployee
            ? <>
              <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Discharge</button>
              <button type="button"
                onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/edit`) }}>Edit</button>
              <button type="button"
                onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
            </>
            : null
          }
        </div>
      </div>
    );
  }
}

export default EmployeeCard;