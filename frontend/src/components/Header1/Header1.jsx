import React from "react";
import "./Header1.scss";
import logo from "../../assets/Logo White Transparent.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div id="header1">
      <Link to ="/">
      <img id="logo1" src={logo} alt="logo" width="100px" />
      </Link>
      <h1 id="title1">Your Personal Recipe Finder</h1>
      <Link to ="aboutus">
      <button type="button" class="btn btn-outline-light" id="AboutUs1">
        About Us!
      </button>
      </Link>
    </div>
  );
};

export default Header;

{
  /* <Link to={"/"}>
        <img id="logo" src={logo} alt="logo" />
      </Link>
      <h1 id="title">Your Personal Recipe Finder</h1>
      <Link to="/aboutus">
        <input type="button" id="AboutUs" value="About Us" />
      </Link> */
}
