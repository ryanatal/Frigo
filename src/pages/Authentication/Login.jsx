import React, { useState } from "react";
import "./Authentication.scss";
import { Link } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../state";
import { SERVER_URL } from "../../constants/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitToastId = React.useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    axios.post(`${SERVER_URL}/api/v1/auth/login`, formData).then((res) => {
        dispatch(
          setLogin({
            user: res.data.user,
            token: res.data.token,
          })
        );
        navigate("/landing");
        if (!toast.isActive(submitToastId.current)) {
        toast.success("Login successful", {
          toastId: submitToastId.current,
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      };
      }
    ).catch((error) => {
      if (!toast.isActive(submitToastId)) {
        toast.error("Login failed", {
          toastId: submitToastId.current,
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      }
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="Authentication-Main">
        .
        <div className="Authentication-Container">
          <form
            onSubmit={submitForm}
            method="post"
            className="Authentication-Form"
          >
            <h2 className="fw-bold mb-2">Welcome Back!</h2>
            <p className="text-white-50 mb-5">
              Please enter your login and password!
            </p>
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
              name="password"
              size="lg"
              onChange={handleChange}
            />
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable={false}
        theme="light"
      />
    </>
  );
}

export default Login;
