import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Login from './auth/Login'
import NotFound from './NotFound/NotFound'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import LocationForm from './location/LocationForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from './employee/EmployeeForm'
import OwnerList from './owner/OwnerList'
import OwnerForm from './owner/OwnerForm'


class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null



  render() {
    // universal condition if not authenticated - only display login route
    if (!this.isAuthenticated()) {
      return (
        <Route exact path="/*" component={Login} />
      )
      // if authenticated, display all routes
    } else {
      return (
        <React.Fragment>
          <Route path="/login" component={Login} />
          <Route path="/notfound" component={NotFound} />
          <Route exact path="/" render={(props) => {
            return <Home />
          }} />
          <Route exact path="/animals" render={props => {
            return <AnimalList {...props} />
          }} />
          <Route path="/animals/:animalId(\d+)" render={(props) => {
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
          }} />
          <Route path="/animals/new" render={(props) => {
            return <AnimalForm {...props} />
          }} />

          <Route exact path="/locations" render={(props) => {
            return <LocationList {...props} />
          }} />
          <Route path="/locations/new" render={(props) => {
            return <LocationForm {...props} />
          }} />

          <Route path="/locations/:locationId(\d+)" render={(props) => {
            // Pass the locationId to the LocationDetailComponent
            return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
          }} />

          <Route exact path="/employees" render={(props) => {
            return <EmployeeList {...props} />
          }} />
          <Route path="/employees/new" render={(props) => {
            return <EmployeeForm {...props} />
          }} />

          <Route exact path="/owners" render={(props) => {
            return <OwnerList {...props} />
          }} />
          <Route path="/owners/new" render={(props) => {
            return <OwnerForm {...props} />
          }} />
        </React.Fragment>
      )
    }
  }
}

export default withRouter(ApplicationViews)