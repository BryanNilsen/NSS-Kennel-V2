import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';

class OwnerForm extends Component {
  state = {
    ownerName: "",
    ownerPhone: "",
    loadingStatus: false,
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create employee object, invoke the OwnerManager post method, and redirect to the full employee list
  */
  constructNewEmployee = evt => {
    evt.preventDefault();
    if (this.state.ownerName === "" || this.state.ownerPhone === "") {
      window.alert("Please input an owner name and phone number");
    } else {
      this.setState({ loadingStatus: true });
      const owner = {
        name: this.state.ownerName,
        phoneNumber: this.state.ownerPhone,
      };

      // Create the animal and redirect user to animal list
      OwnerManager.post(owner)
        .then(() => this.props.history.push("/owners"));
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
                id="ownerName"
                placeholder="Owner Name"
              />
              <label htmlFor="ownerName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="ownerPhone"
                placeholder="Phone Number"
              />
              <label htmlFor="ownerPhone">Phone Number</label>
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

export default OwnerForm