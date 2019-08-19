import React, { Component } from "react"

class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: "",
    remember: false
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleCheck = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.checked
    this.setState(stateToChange)
  }
  handleLogin = (evt) => {
    evt.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    if (this.state.remember) {
      localStorage.setItem(
        "credentials",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      )
      this.props.history.push("/animals");
    } else {
      sessionStorage.setItem(
        "credentials",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      )
      this.props.history.push("/animals");
    }


  }

  render() {
    console.log(this.state.remember)
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
          <h3>Please sign in</h3>
          <div className="formgrid">
            <input onChange={this.handleFieldChange} type="email"
              id="email"
              placeholder="Email address"
              required="" autoFocus="" />
            <label htmlFor="inputEmail">Email address</label>

            <input onChange={this.handleFieldChange} type="password"
              id="password"
              placeholder="Password"
              required="" />
            <label htmlFor="inputPassword">Password</label>

            <input onChange={this.handleCheck} type="checkbox"
              id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit">
            Sign in
            </button>
        </fieldset>
      </form>
    )
  }

}

export default Login