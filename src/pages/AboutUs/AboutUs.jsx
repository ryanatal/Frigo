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
        <a href="https://www.linkedin.com/in/ryan-atallah2002/" target="_blank" rel="noreferrer">
          <img src={RyanA} alt="Team member 1" />
          <h3>Ryan Atallah</h3>
          <p>Full-stack developer</p>
        </a>
      </div>
        <div className="team-member">
          <a href="https://www.linkedin.com/in/perla-daghfal-171638249/" target="_blank" rel="noreferrer">
            <img src = {PerlaD} alt="Team member 2" />
            <h3>Perla Daghfal</h3>
            <p>Full-stack developer</p>
          </a>
        </div>
        <div className="team-member">
          <a href="https://www.linkedin.com/in/omar-issa24/" target="_blank" rel="noreferrer">
            <img src = {OmarI} alt="Team member 3" />
            <h3>Omar Issa</h3>
            <p>Full-stack developer</p>
          </a>
        </div>
        <div className="team-member">
          <a href="https://www.linkedin.com/in/ryankhalil/" target="_blank" rel="noreferrer">
            <img src = {RyanK} alt="Team member 4" />
            <h3>Ryan Khalil</h3>
            <p>Full-stack developer</p>
          </a>
        </div>
        <div className="team-member">
          <a href="https://www.linkedin.com/in/georgeshatem/" target="_blank" rel="noreferrer">
            <img src = {DrGeorges} alt="Professor" />
            <h3>Dr. Georges Hatem</h3>
            <p>Supervising Professor</p>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
