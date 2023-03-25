import React from "react";
import "./Header1.scss";
import logo from "../../assets/Logo White Transparent.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <html>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            </link>
        </head>
        <body>
        <div id="header1">
        <img id="logo1" src={logo} alt="logo" width="100px"/>
        <h1 id="title1">Your Personal Recipe Finder</h1>
        <button type="button" class="btn btn-outline-light" id = "AboutUs1">About Us!</button>
        </div>
        </body>
    </html>
  );
};

export default Header;

{/* <Link to={"/"}>
        <img id="logo" src={logo} alt="logo" />
      </Link>
      <h1 id="title">Your Personal Recipe Finder</h1>
      <Link to="/aboutus">
        <input type="button" id="AboutUs" value="About Us" />
      </Link> */}