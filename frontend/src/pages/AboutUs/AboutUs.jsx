import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutus">
    <div className="about-us-container">
       <h2>Our Team</h2>
      <div className="team-container">
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team member 1" />
          <h3>Ryan Atallah</h3>
          <p>Full-stack developer</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team member 2" />
          <h3>Perla Daghfal</h3>
          <p>Full-stack developer</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team member 3" />
          <h3>Omar Issa</h3>
          <p>Full-stack developer</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team member 4" />
          <h3>Ryan Khalil</h3>
          <p>Full-stack developer</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
