import React, { Component } from "react";
import api from "../../utils/api";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "abhi",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("hello from submit");
    console.log(this.state);
    //api.post();
    // URL :
    // Data:
    // Configuration :
    if (this.state.password === this.state.confirmPassword) {
      api
        .post("/users", this.state)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    } else {
      console.log("password and confirm password should be same");
    }
  };
  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <>
        {" "}
        <section class="container">
          <h1 class="large text-primary">Sign Up</h1>
          <p class="lead">
            <i class="fas fa-user"></i> Create Your Account
          </p>
          <form class="form" onSubmit={this.onSubmit}>
            <div class="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={this.onChange}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={this.onChange}
              />
              <small class="form-text">
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                minLength="6"
                onChange={this.onChange}
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                minLength="6"
                value={confirmPassword}
                onChange={this.onChange}
              />
            </div>
            <input type="submit" class="btn btn-primary" value="Register" />
          </form>
          <p class="my-1">
            Already have an account? <a href="login.html">Sign In</a>
          </p>
        </section>
      </>
    );
  }
}
