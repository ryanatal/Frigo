import React from "react";
import "./AboutUs.scss";
import RyanA from "../../assets/About-Us/Ryan-Atallah-About.png";
import PerlaD from "../../assets/About-Us/Perla-Daghfal-About.png";
import OmarI from "../../assets/About-Us/Omar-Issa-About.png";
import RyanK from "../../assets/About-Us/Ryan-Khalil-About.png";
import DrGeorges from "../../assets/About-Us/DrGeorges-About.png";
const AboutUs = () => {
  return (
    <div className="aboutus">
    <div className="about-us-container">
       <h2>Our Team</h2>
      <div className="team-container">
        <div className="team-member">
          <img src = {RyanA} alt="Team member 1" />
          <h3>Ryan Atallah</h3>
          <p>Full-stack developer</p>
        </div>
        <div className="team-member">
          <img src = {PerlaD} alt="Team member 2" />
          <h3>Perla Daghfal</h3>
          <p>Full-stack developer</p>
        </div>
        <div className="team-member">
          <img src = {OmarI} alt="Team member 3" />
          <h3>Omar Issa</h3>
          <p>Full-stack developer</p>
        </div>
        <div className="team-member">
          <img src = {RyanK} alt="Team member 4" />
          <h3>Ryan Khalil</h3>
          <p>Full-stack developer</p>
        </div>
        <div className="team-member">
          <img src = {DrGeorges} alt="Professor" />
          <h3>Dr. Georges Hatem</h3>
          <p>Supervising Professor</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
