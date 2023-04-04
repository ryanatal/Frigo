import React from "react";
import "./Authentication.scss";
import { Link } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";

function Login() {
  return (
    <div className="Authentication-Main">
      .
      <div className="Authentication-Container">
        <form className="Authentication-Form">
          <h2 className="fw-bold mb-2">Welcome Back!</h2>
          <p className="text-white-50 mb-5">
            Please enter your login and password!
          </p>
          <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg"/>
          <button type="submit">Login</button>
          <div className="switch-authentication">
            Don't have an account? &nbsp;
            <Link to="/signup" className="Switching-Button">
              {" "}
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
