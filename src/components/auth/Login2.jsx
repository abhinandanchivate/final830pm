import React, { useState } from "react";
import api from "../../utils/api";
const initialState = {
  email: "",
  password: "",
};
const Login2 = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { email, password } = formData;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello from submit");
    console.log(formData);
    api
      .post("/auth", formData)
      .then((res) => console.log(res.data))
      .catch((err) =>
        err.response.data.errors.forEach((e) => console.log(e.msg))
      );
  };
  return (
    <>
      <section class="container">
        <h1 class="large text-primary">Sign In</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Sign into Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              value={email}
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Login" />
        </form>
        <p class="my-1">
          Don't have an account? <a href="register.html">Sign Up</a>
        </p>
      </section>
    </>
  );
};

export default Login2;
