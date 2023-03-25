import React, { useState } from "react";
import api from "../../utils/api";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../redux/action/authAction";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const Register2 = ({ isAuthenticated, register }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState([]);
  const { email, password, confirmPassword, name } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      register(formData).then(() => {
        navigate("/dashboard");
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
              value={name}
              onChange={onChange}
            />
            <div className="d-block invalid-feedback">
              {errors[0] && errors[0].param == "name" ? errors[0].msg : ""}
            </div>
          </div>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
            <div className="d-block invalid-feedback">
              {errors[1] && errors[1].param == "email" ? errors[1].msg : ""}
            </div>
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
            <div className="d-block invalid-feedback">
              {errors[2] && errors[2].param == "password" ? errors[2].msg : ""}
            </div>
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

Register2.propTypes = {
  isAuthenticated: PropTypes.bool,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register2);

// class based components : smart components.
// dumb components : we can't have any processing or can't write any BL stuff.

// we can render the data.
