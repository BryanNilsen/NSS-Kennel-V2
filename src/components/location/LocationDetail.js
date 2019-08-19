import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css';

class LocationDetail extends Component {

  state = {
    name: "",
    address: "",
    loadingStatus: true,
    redirect: false,
  }

  componentDidMount() {
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
      .then((location) => {
        if (!location.id) {
          this.setState({
            redirect: true
          })

        } else {
          this.setState({
            name: location.name,
            address: location.address,
            loadingStatus: false,
          });
        }
      });
  }

  handleDelete = () => {
    //invoke the delete function in LocationManger and re-direct to the location list.
    this.setState({ loadingStatus: true })
    LocationManager.delete(this.props.locationId)
      .then(() => this.props.history.push("/locations"))
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/notfound" />
    } else {
      return (
        <div className="card">
          <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.address}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Location</button>
          </div>
        </div>
      );
    }
  }
}

export default LocationDetail;