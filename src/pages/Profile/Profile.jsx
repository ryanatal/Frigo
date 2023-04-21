import React from "react";
import "./Profile.scss";
import Button from 'react-bootstrap/Button';

const Profile = ({ username, email, password }) => {
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-header">
          <img src="https://via.placeholder.com/150" alt="Profile Picture" />
          <h2>{username} Ryan</h2>
        </div>
        <div className="profile-info">
          <div className="label-profile">
            Email:
            <div className="input-container">
              <input type="email" value={email} disabled className="input-profile"/>
              <Button variant="outline-secondary">Edit</Button>
            </div>
          </div>
          <div className="label-profile">
            Password:
            <div className="input-container">
              <input type="password" value={password} disabled className="input-profile"/>
              <Button variant="outline-secondary">Edit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;