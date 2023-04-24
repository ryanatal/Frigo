import React, { useState } from "react";
import "./Authentication.scss";
import { Link } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SignUp() {

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:8000/api/v1/auth/register", formData)
      .then((res) => {
        console.log(res.data)
      })
      navigate("/");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Username"
            name="username"
            id="formControlLg"
            type="text"
            size="lg"
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Email"
            id="formControlLg"
            type="email"
            name="email"
            size="lg"
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            name="password"
            onChange={handleChange}
          />
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Confirm Password"
            id="formControlLg"
            type="password"
            size="lg"
          />
          <button type="submit">Sign Up</button>
          <div className="switch-authentication">
            Already have an account? &nbsp;
            <Link to="/" className="Switching-Button">
              {" "}
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
