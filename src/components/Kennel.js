import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import APIManager from "../modules/APIManager"

import "./Kennel.css"

class Kennel extends Component {
  state = {
    results: {}
  }

  getSearchResults = (keyword) => {
    APIManager.search(keyword)
      .then(results => {
        this.setState({ results })
      })
  }

  render() {

    return (
      <>
        <NavBar getSearchResults={this.getSearchResults} />
        <ApplicationViews results={this.state.results} />
      </>
    )
  }
}

export default Kennel