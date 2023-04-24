import React from "react";
import "./Profile.scss";
// import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import dr from "../../assets/About-Us/DrGeorges-About.png";

const Profile = () => {

  const username = useSelector(state => state.user.username);
  const email = useSelector(state => state.user.email);

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-header">
          <img src={dr} alt="profile"/>
          <h2>{username}</h2>
        </div>
        <div className="profile-info">
          <div className="label-profile">
            Email:
            <div className="input-container">
              <h5 className="input-profile">{email}</h5>
              {/* <Button variant="outline-secondary">Edit</Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;