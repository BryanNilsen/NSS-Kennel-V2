import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationForm extends Component {
  state = {
    locationName: "",
    locationAddress: "",
    loadingStatus: false,
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create employee object, invoke the LocationManager post method, and redirect to the full employee list
  */
  constructNewEmployee = evt => {
    evt.preventDefault();
    if (this.state.locationName === "" || this.state.locationAddress === "") {
      window.alert("Please input a location name and address");
    } else {
      this.setState({ loadingStatus: true });
      const location = {
        name: this.state.locationName,
        address: this.state.locationAddress,
      };

      // Create the animal and redirect user to animal list
      LocationManager.post(location)
        .then(() => this.props.history.push("/locations"));
    }
  };

  render() {

    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="locationName"
                placeholder="Location Name"
              />
              <label htmlFor="locationName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="locationAddress"
                placeholder="Location Address"
              />
              <label htmlFor="locationAddress">Address</label>
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

export default LocationForm