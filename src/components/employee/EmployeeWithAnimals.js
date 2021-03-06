import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'

class EmployeeWithAnimals extends Component {
  state = {
    employee: {},
    animals: []
  }

  componentDidMount() {
    //got here now make call to get employee with animal
    EmployeeManager.getWithAnimals(this.props.match.params.employeeId)
      .then((APIResult) => {
        this.setState({
          employee: APIResult,
          animals: APIResult.animals,
          locations: APIResult.locations
        })
      })
  }


  render() {
    return (
      <div className="card">
        <p>Employee: {this.state.employee.name}</p>
        <p>Animals Cared For:</p>
        <div className="container-cards">
          {this.state.animals.map(animal =>
            <AnimalCard
              key={animal.id}
              animal={animal}
              {...this.props}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmployeeWithAnimals;