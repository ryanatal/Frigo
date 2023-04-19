import React from "react";
import "./Authentication.scss";
import { Link } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";

function SignUp() {
  return (
    <div className="Authentication-Main">
      .
      <div className="Authentication-Container">
        <form className="Authentication-Form">
        <h2 className="signup-header fw-bold mb-2">Welcome</h2>
          <p className="text-white-50 mb-5">
            Please register to continue!
          </p>
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Username"
            id="formControlLg"
            type="text"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Email"
            id="formControlLg"
            type="email"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4 mx-5 w-100"
            labelClass="text-white"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
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
            <Link to="/login" className="Switching-Button">
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
