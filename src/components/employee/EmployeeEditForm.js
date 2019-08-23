import React, { Component } from "react"
import APIManager from "../../modules/APIManager";

class EmployeeEditForm extends Component {
  //set the intial state
  state = {
    employeeName: "",
    locationId: "",
    locations: [],
    loadingStatus: true,
  };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingEmployee = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedEmployee = {
      id: this.props.match.params.employeeId,
      name: this.state.employeeName,
      locationId: parseInt(this.state.locationId)
    };

    APIManager.update("employees", editedEmployee)
      .then(() => this.props.history.push("/employees"))
  }

  componentDidMount() {
    APIManager.get("employees", this.props.match.params.employeeId)
      .then(employee => {
        this.setState({
          employeeName: employee.name,
          locationId: employee.locationId,
          loadingStatus: false,
        });
      });
    APIManager.getAll("locations")
      .then(locations => this.setState({ locations }))
  }

  render() {
    return (
      <>
        <h1>Edit Employee</h1>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value={this.state.employeeName}
              />
              <label htmlFor="employeeName">Employee Name</label>

              <select
                name="Location"
                onChange={this.handleFieldChange}
                id="locationId"
                value={this.state.locationId}
              >
                {this.state.locations.map(location =>
                  <option key={location.id} value={location.id}> {location.name}</option>
                )}

              </select>
              <label htmlFor="Location">Location</label>

            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingEmployee}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default EmployeeEditForm