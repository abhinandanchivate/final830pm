import React, { useState } from "react";
import api from "../../utils/api";
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register2 = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const { email, password, confirmPassword, name } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello from submit");
    console.log(formData);
    //api.post();
    // URL :
    // Data:
    // Configuration :
    if (password === confirmPassword) {
      api
        .post("/users", formData)
        .then((res) => console.log(res.data))
        .catch((err) => {
          err.response.data.errors.forEach((e) => console.log(e.msg));
        });
    } else {
      console.log("password and confirm password should be same");
    }
  };
  return (
    <>
      <section class="container">
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Create Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              value={name}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
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
              minLength="6"
              value={password}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              minLength="6"
              value={confirmPassword}
              onChange={onChange}
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
};

export default Register2;
// class based components : smart components.
// dumb components : we can't have any processing or can't write any BL stuff.

// we can render the data.
