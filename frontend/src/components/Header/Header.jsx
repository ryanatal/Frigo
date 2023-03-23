import React from "react";
import "./Header.css";
import logo from "../../assets/Logo White Transparent.png"
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div id = "header">
        <img id = "logo" src = {logo} alt = "logo" />
        <h1 id = "title">Your Personal Recipe Finder</h1>
        <input type = "button" id = "AboutUs" value = "About Us"/>
      </div>
    );
  }
}

export default Header;