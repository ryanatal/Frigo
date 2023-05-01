import React, { useState } from "react";
import "./Authentication.scss";
import { Link } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../constants/constants";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
      axios
      .post(`${SERVER_URL}/api/v1/auth/register`, formData)
      .then((res) => {
        console.log(res.data)
      })
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validationRules = {
    username: {
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      required: true,
      minLength: 8,
    },
    confirmPassword: {
      required: true,
      matchField: "password",
    },
  };

  const validateForm = () => {
    let errors = {};

    Object.keys(validationRules).forEach((fieldName) => {
      let fieldRules = validationRules[fieldName];
      let fieldValue = formData[fieldName];

      if (fieldRules.required && !fieldValue) {
        errors[fieldName] = "This field is required.";
      }

      if (fieldRules.minLength && fieldValue.length < fieldRules.minLength) {
        errors[fieldName] = `This field must be at least ${fieldRules.minLength} characters long.`;
      }

      if (fieldRules.maxLength && fieldValue.length > fieldRules.maxLength) {
        errors[fieldName] = `This field must be no more than ${fieldRules.maxLength} characters long.`;
      }

      if (fieldRules.pattern && !fieldRules.pattern.test(fieldValue)) {
        errors[fieldName] = "Please enter a valid email address.";
      }

      if (fieldRules.matchField && fieldValue !== formData[fieldRules.matchField]) {
        errors[fieldName] = "Passwords do not match.";
      }
    });

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <div className="Authentication-Main">
      .
      <div className="Authentication-Container">
        <form method="post" onSubmit={submitForm} className="Authentication-Form">
        <h2 className="signup-header fw-bold mb-2">Welcome</h2>
          <p className="text-white-50 mb-5">
            Please register to continue!
          </p>
          {formErrors.username && (
            <span className="text-danger">{formErrors.username}</span>
          )}
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Username"
            name="username"
            id="formControlLg"
            type="text"
            size="lg"
            onChange={handleChange}
            error={formErrors.username}
          />
          {formErrors.email && (
            <span className="text-danger">{formErrors.email}</span>
          )}
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Email"
            id="formControlLg"
            type="email"
            name="email"
            size="lg"
            onChange={handleChange}
            error={formErrors.email}
          />
          {formErrors.password && (
            <span className="text-danger">{formErrors.password}</span>
          )}
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            name="password"
            onChange={handleChange}
            error={formErrors.password}
          />
          {formErrors.confirmPassword && (
            <span className="text-danger">{formErrors.confirmPassword}</span>
          )}
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Confirm Password"
            id="formControlLg"
            type="password"
            size="lg"
            name="confirmPassword"
            onChange={handleChange}
            error={formErrors.confirmPassword}
          />
          <button className="Authentication-Button" type="submit">
            Sign Up
          </button>
        </form>
        <div className="switch-authentication">
            Already have an account? &nbsp;
            <Link to="/" className="Switching-Button">
              {" "}
              Login
            </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;