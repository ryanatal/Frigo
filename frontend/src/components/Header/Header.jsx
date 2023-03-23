import React from "react";
import "./Header.css";
import logo from "../../assets/Logo White Transparent.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div id="header">
      <Link to={"/"}>
        <img id="logo" src={logo} alt="logo" />
      </Link>
      <h1 id="title">Your Personal Recipe Finder</h1>
      <Link to="/aboutus">
        <input type="button" id="AboutUs" value="About Us" />
      </Link>
    </div>
  );
};

export default Header;
