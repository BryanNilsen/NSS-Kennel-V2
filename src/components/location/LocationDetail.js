import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import LocationManager from '../../modules/LocationManager';
import EmployeeCard from '../employee/EmployeeCard';
import './LocationDetail.css';

class LocationDetail extends Component {

  state = {
    name: "",
    address: "",
    employees: [],
    loadingStatus: true,
    redirect: false,
  }

  componentDidMount() {
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.getWithEmployees(this.props.locationId)
      .then((location) => {
        if (!location.id) {
          this.setState({
            redirect: true
          })

        } else {
          this.setState({
            name: location.name,
            address: location.address,
            employees: location.employees,
            loadingStatus: false,
          });
        }
      });
  }

  handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    this.setState({ loadingStatus: true })
    LocationManager.delete(this.props.locationId)
      .then(() => this.props.history.push("/locations"))
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/notfound" />
    } else {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.address}</p>
            {this.state.employees.length > 0
              ? <p>Employees At this Location</p>
              : null
            }
            <div className="container-cards">
              {this.state.employees.map(employee =>
                <EmployeeCard
                  key={employee.id}
                  employee={employee}
                />
              )}
            </div>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Location</button>
          </div>
        </div>
      );
    }
  }
}

export default LocationDetail;