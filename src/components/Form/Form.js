import React, { Component, Fragment } from "react";
import { FormError } from "./FormError";
import { Link } from "@reach/router";
import NavOne from "../NavOne/NavOne";
import "./Form.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    login: "",
    // Check Errors
    formErrors: { email: "", password: "" },
    emailValid: false,
    passwordValid: false,
    formValid: false
  };

  //On Submit

    onSubmit = e => {
      e.preventDefault();
    };

  //   User Input Handler

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validate(name, value);
    });
  };

  validate(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        //   Email Regex
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        //Check for password length
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.formValidate
    );
  }

  formValidate() {
    const { emailValid, passwordValid } = this.state;
    this.setState({
      formValid: emailValid && passwordValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <Fragment>
        <NavOne />
        <div className="container">
          <div className="panel panel-default">
            <FormError formErrors={this.state.formErrors} />
          </div>

          <div className="form-wrapper">
            <h1 className="form-header wow fadeInUp" data-wow-delay=".5s">Sign Up For iCloud</h1>
            <form onSubmit={this.onSubmit}>
              <div className="firstName wow fadeInUp" data-wow-delay=".7s">
                <label htmlFor="firstName">First Name</label>
                <input
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  noValidate
                  onChange={this.handleUserInput}
                  value={firstName}
                />
              </div>

              <div className="lastName wow fadeInUp" data-wow-delay=".7s">
                <label htmlFor="lastName">Last Name</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  noValidate
                  onChange={this.handleUserInput}
                  value={lastName}
                />
              </div>

              <div className="email wow fadeInUp" data-wow-delay=".9s">
                <label htmlFor="email">Email</label>
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleUserInput}
                  value={email}
                />
              </div>

              <div className="password wow fadeInUp" data-wow-delay="1.1s">
                <label htmlFor="password">Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleUserInput}
                  value={password}
                />
              </div>

              <div className="createAccount wow fadeInUp" data-wow-delay="1.3s">
                <button
                  className="btn btn-dark"
                  type="submit"
                  disabled={!this.state.formValid}
                  onSubmit={this.onSubmit}
                >
                  <Link to="/home" style={{color: "#000"}}>Create Account</Link>
                </button>
                <small>Already Have an Account?</small>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Form;
