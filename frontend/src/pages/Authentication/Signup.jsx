import React from "react";
import "./Authentication.scss";

function SignUp() {
  return (
    <div className="Authentication-Main">
      .
        <div className="Authentication-Container">
          <form className="Authentication-Form">
            <h2>Welcome!</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Sign Up</button>
            <div className="switch-authentication">
              Already have an account? &nbsp;
              <a href="/login" className="Switching-Button"> Login</a>
            </div>
          </form>
        </div>
    </div>
  );
}

export default SignUp;