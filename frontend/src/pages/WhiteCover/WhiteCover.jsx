import React from 'react';
import './WhiteCover.scss';
import logo from '../../assetsCover/Logo Black Transparent.png';
import truffle from '../../assetsCover/Truffle.jpg';
import pizza from '../../assetsCover/pizza.jpeg';
import steak from '../../assetsCover/steak.jpeg';
class WhiteCover extends React.Component {
  render() {
    return (
        <>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <body>
          <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#home">
                <img id="logo" src={logo} alt="logo" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"> <a className="nav-link" href="#home">Home</a> </li>
                  <li className="nav-item"><a className="nav-link" href="#about">Recipes</a></li>
                  <li className="nav-item"><a className="nav-link" href="#team">Login/SignUp</a></li>
                  <li className="nav-item"><a className="nav-link" href="#team">Shopping</a></li>
                  <li className="nav-item"><a className="nav-link" href="#connect">About Us</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div id="slides" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#slides" data-slide-to="0"className="active"></li>
              <li data-target="#slides" data-slide-to="1"></li>
              <li data-target="#slides" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={truffle} alt="carousel item" />
                <div className="carousel-caption">
                  <h1 className="display-2">Frigo</h1>
                  <h3>Best Food Generator</h3>
                </div>
              </div>

              <div className="carousel-item">
                <img src={pizza} alt="carousel item" />
              </div>

              <div className="carousel-item">
                <img src={steak} alt="carousel item" />
              </div>

            </div>

          </div>
        </body>
      </>
    );
  }
}



export default WhiteCover;