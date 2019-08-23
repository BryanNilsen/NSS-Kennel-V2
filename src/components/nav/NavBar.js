import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {
  state = {
    searchInput: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  render() {

    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><NavLink className="nav-link" to="/home">Home</NavLink></li>
            <li><NavLink className="nav-link" to="/animals">Animals</NavLink></li>
            <li><NavLink className="nav-link" to="/locations">Locations</NavLink></li>
            <li><NavLink className="nav-link" to="/employees">Employees</NavLink></li>
            <li><NavLink className="nav-link" activeClassName='active' to="/owners">Owners</NavLink></li>
            <li><input type="text" id="searchInput" onChange={this.handleFieldChange}></input></li>
            <li>
              <button
                type="button"
                onClick={() => {
                  this.props.getSearchResults(this.state.searchInput)
                  this.props.history.push("/search")
                }}
              >Submit
              </button>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(NavBar);