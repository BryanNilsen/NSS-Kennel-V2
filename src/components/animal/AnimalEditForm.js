import React, { Component } from "react"
import AnimalManager from "../../modules/AnimalManager"
import EmployeeManager from "../../modules/EmployeeManager"
import "./AnimalForm.css"

class AnimalEditForm extends Component {
  //set the intial state
  state = {
    animalName: "",
    breed: "",
    employeeId: "",
    loadingStatus: true,
    employees: []
  };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingAnimal = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedAnimal = {
      id: this.props.match.params.animalId,
      name: this.state.animalName,
      breed: this.state.breed,
      employeeId: this.state.employeeId
    };

    AnimalManager.update(editedAnimal)
      .then(() => this.props.history.push("/animals"))
  }

  componentDidMount() {
    EmployeeManager.getAll()
      .then(employees => AnimalManager.get(this.props.match.params.animalId)
        .then(animal => {
          this.setState({
            animalName: animal.name,
            breed: animal.breed,
            employeeId: animal.employeeId,
            loadingStatus: false,
            employees: employees
          });
        })
      )
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="animalName"
                value={this.state.animalName}
              />
              <label htmlFor="animalName">Animal name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value={this.state.breed}
              />
              <label htmlFor="breed">Breed</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingAnimal}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default AnimalEditForm