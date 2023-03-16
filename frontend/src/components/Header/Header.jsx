import React from "react";
import "./Header.css";
import logo from "../../assets/Logo White Transparent.png"

class Header extends React.Component {
  render() {
    return (
      <div id = "header">
        <img id = "logo" src = {logo} alt = "logo" />
        <h1 id = "title">The Best App Ever</h1>
        <input type = "button" id = "AboutUs" value = "About Us"/>
      </div>
    );
  }
}

export default Header;