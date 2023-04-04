import React from "react";
import "./Authentication.scss";

function Login() {
  return (
    <div className="Authentication-Main">
      .
        <div className="Authentication-Container">
          <form className="Authentication-Form">
            <h2>Welcome Back!</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            <div className="switch-authentication">
              Sign up instead? &nbsp;
              <a href="/signup" className="Switching-Button"> Sign up</a>
            </div>
          </form>
        </div>
    </div>
  );
}

export default Login;
