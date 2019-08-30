import { Route, withRouter, Redirect, Switch } from "react-router-dom"
import React, { Component } from 'react'
import Login from './auth/Login'
import SearchResults from './search/SearchResults'
import NotFound from './NotFound/NotFound'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import LocationForm from './location/LocationForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from './employee/EmployeeForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import OwnerList from './owner/OwnerList'
import OwnerForm from './owner/OwnerForm'


class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null || sessionStorage.getItem("credentials") !== null

  ensureAuth = (component) => this.isAuthenticated()
    ? component
    : <Redirect to="/login" />

  ensureAuth2 = (Component, props) => {
    if (this.isAuthenticated()) {
      return <Component {...props} />
    }
    return <Redirect to="/login" />
  }


  render() {
    // if (!this.isAuthenticated()) {
    //   return (
    //     <Switch>
    //       <Route path="/login" component={Login} />
    //       <Redirect to="/login" />
    //     </Switch>
    //   )
    // } else {

    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route path="/search" render={(props) => {
          return <SearchResults results={this.props.results} {...props} />
        }} />
        <Route path="/notfound" component={NotFound} />
        <Route exact path="/home" render={(props) => {
          return <Home />
        }} />

        {/* instantiates component first and conditionally renders */}
        <Route exact path="/animals" render={props =>
          this.ensureAuth(<AnimalList {...props} />)
        } />

        {/* using an 'if statement' */}
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          if (this.isAuthenticated()) {
            return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        {/* using a ternary */}
        <Route path="/animals/new" render={(props) =>
          this.isAuthenticated()
            ? <AnimalForm {...props} />
            : <Redirect to="/login" />
        } />

        <Route
          path="/animals/:animalId(\d+)/edit" render={props =>
            this.ensureAuth2(AnimalEditForm, props)
          }
        />

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

        {/* method 1 takes component name and spreads props */}
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          return this.ensureAuth2(LocationDetail, { locationId: parseInt(props.match.params.locationId), ...props })
        }} />

        {/* method 2 takes component name and existing props */}
        <Route exact path="/employees" render={(props) => {
          return this.ensureAuth2(EmployeeList, props)
        }} />

        <Route path="/employees/new" render={(props) => {
          if (this.isAuthenticated()) {
            return <EmployeeForm {...props} />
          }
          return <Redirect to="/login" />
        }} />
        <Route path="/employees/:employeeId(\d+)/edit" render={props => {
          return <EmployeeEditForm {...props} />
        }}
        />

        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
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
  // }
}

export default ApplicationViews