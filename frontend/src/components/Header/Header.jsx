import React from "react";
import './Header.scss';
import logo from "../../assets/Logo Black Transparent.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
      <header id="nav-wrapper">
        <nav id="nav">
        <Link to ="/">
          <div className="nav left">
            <span className="gradient skew">
              <h1 className="logo un-skew">
                <img src = {logo} alt="logo" id = "headerlogo" width="80px"></img>
              </h1>
            </span>
          </div>
          </Link>
          <div className="nav right">
            <Link to="/landing" className={`nav-link ${location.pathname === '/landing' ? 'active' : ''}`}>
              <span className="nav-link-span">
                <span className="u-nav">Home</span>
              </span>
            </Link>
            <Link to="/ingredients" className={`nav-link ${location.pathname === '/ingredients' ? 'active' : ''}`}>
              <span className="nav-link-span">
                <span className="u-nav">Ingredients</span>
              </span>
            </Link>
            <Link to="/shopping" className={`nav-link ${location.pathname === '/shopping' ? 'active' : ''}`}>
              <span className="nav-link-span">
                <span className="u-nav">Shopping</span>
              </span>
            </Link>
            <Link to="/aboutus" className={`nav-link ${location.pathname === '/aboutus' ? 'active' : ''}`}>
              <span className="nav-link-span">
                <span className="u-nav">About</span>
              </span>
            </Link>
          </div>
        </nav>
      </header>
  );
};

export default Header;