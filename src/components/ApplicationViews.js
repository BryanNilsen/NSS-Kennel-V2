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
  isAuthenticated = () => localStorage.getItem("credentials") !== null || sessionStorage.getItem("credentials") !== null



  render() {

    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route path="/notfound" component={NotFound} />
        <Route exact path="/home" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <AnimalForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/locations" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/locations/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/locations/:locationId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/employees" render={(props) => {
          if (this.isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <EmployeeForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/owners" render={(props) => {
          if (this.isAuthenticated()) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <OwnerForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      </React.Fragment>
    )

  }
}

export default withRouter(ApplicationViews)