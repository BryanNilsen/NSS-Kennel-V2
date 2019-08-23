import React, { Component } from 'react';

class SearchResults extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Search Results</h3>
          <h2>Animals</h2>
          {this.props.results.animals
            ? this.props.results.animals.map(animal =>
              <p key={animal.id}>{animal.name}</p>)
            : <p>no matches</p>
          }
          <h2>Employees</h2>
          {this.props.results.employees
            ? this.props.results.employees.map(employee =>
              <p key={employee.id}>{employee.name}</p>)
            : <p>no matches</p>
          }

        </div>
      </div>
    );
  }
}

export default SearchResults;