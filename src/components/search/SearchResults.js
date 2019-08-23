import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SearchResults extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Search Results for: "{this.props.results.keyword}"</h3>
          <h2>Animals</h2>
          <ul>
            {this.props.results.animals.length > 0
              ? this.props.results.animals.map(animal =>
                <li key={animal.id}><Link to={`/animals/${animal.id}`}>{animal.name}</Link></li>
              )
              : <p>no matches</p>
            }
          </ul>
          <h2>Employees</h2>
          <ul>
            {this.props.results.employees.length > 0
              ? this.props.results.employees.map(employee =>
                <li key={employee.id}><Link to={`/employees/${employee.id}/details`}>{employee.name}</Link></li>)
              : <p>no matches</p>
            }
          </ul>
          <h2>Locations</h2>
          {this.props.results.locations.length > 0
            ? this.props.results.locations.map(location =>
              <p key={location.id}>{location.name}</p>)
            : <p>no matches</p>
          }
          <h2>Owners</h2>
          {this.props.results.owners.length > 0
            ? this.props.results.owners.map(owner =>
              <p key={owner.id}>{owner.name}</p>)
            : <p>no matches</p>
          }
        </div>
      </div>
    );
  }
}

export default SearchResults;