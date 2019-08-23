import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

class EmployeeForm extends Component {
  state = {
    employeeName: "",
    locations: [],
    locationId: "Select",
    loadingStatus: false,
  };

  componentDidMount() {
    APIManager.getAll("locations")
      .then(locations => this.setState({ locations }))

  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create employee object, invoke the APIManager post method, and redirect to the full employee list
  */
  constructNewEmployee = evt => {
    evt.preventDefault();
    if (this.state.employeeName === "" || this.state.locationId === "Select") {
      window.alert("Please input an employee name and select location");
    } else {
      this.setState({ loadingStatus: true });
      const employee = {
        name: this.state.employeeName,
        locationId: parseInt(this.state.locationId)
      };

      // Create the animal and redirect user to animal list
      APIManager.post("employees", employee)
        .then(() => this.props.history.push("/employees"));
    }
  };

  render() {

    return (
      <>
        <h1>Add Employee</h1>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="employeeName"
                placeholder="Employee Name"
              />
              <label htmlFor="employeeName">Name</label>

              <select
                name="Location"
                onChange={this.handleFieldChange}
                id="locationId"
              >
                <option value="Select">Select Location</option>
                {this.state.locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}

              </select>
              <label htmlFor="Location">Location</label>

            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewEmployee}
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    )
  }
}

export default EmployeeForm