import React, { useEffect } from "react";
import "./Authentication.css";

function SignUp() {
  useEffect(() => {
    const switchers = [...document.querySelectorAll('.switcher')];

    switchers.forEach(item => {
      item.addEventListener('click', function() {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
      })
    });

    return () => {
      switchers.forEach(item => {
        item.removeEventListener('click', function() {
          switchers.forEach(item => item.parentElement.classList.remove('is-active'))
          this.parentElement.classList.add('is-active')
        })
      })
    };
  }, []);

  return (
    <div>
      <section className="forms-section">
        <div className="forms">
          <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
              Sign Up
              <span className="underline"></span>
            </button>
            <form className="form form-signup">
              <fieldset>
                <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                <div className="input-block">
                  <label htmlFor="signup-email">E-mail</label>
                  <input id="signup-email" type="email" required></input>
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Password</label>
                  <input id="signup-password" type="password" required></input>
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password-confirm">Confirm password</label>
                  <input id="signup-password-confirm" type="password" required></input>
                </div>
              </fieldset>
              <button type="submit" className="btn-signup">
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;