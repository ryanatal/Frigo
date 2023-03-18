import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Frigo</h1>
      <p className="mission-statement">
      Welcome to Frigo, where our mission is to make cooking convenient and enjoyable for everyone. We understand that finding recipes to cook can be a daunting task, especially when you have limited ingredients in your pantry. That's why we have created a platform that helps you discover new and exciting recipes that you can cook with the ingredients you already have.      </p>
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
  );
};

export default AboutUs;
