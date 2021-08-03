import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PostData } from "../services/PostData";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectToReferrer: false,
      logged: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleSubmit() {
    if (this.state.username && this.state.password) {
      PostData("login", this.state).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
          this.setState({ logged: responseJson.userData });
        } else alert(result.error);
      });
    }
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  logout() {
    this.setState({ logged: "" });
  }

  render() {
    if (this.state.logged) {
      return (
        <div>
          <h1>Welcome!</h1>
          <h3>ID: {this.state.logged.id}</h3>
          <h3>Name: {this.state.logged.name}</h3>
          <h3>Email: {this.state.logged.email}</h3>
          <input type="submit" value="Logout" onClick={this.logout} />
        </div>
      );
    } else {
      return (
        <div style={{ width: "30%" }}>
          <h1>Login</h1>
          <div>
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter Username"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary mt-3"
            value="Login"
            onClick={this.handleSubmit}
          />
        </div>
      );
    }
  }
}

export default Login;
