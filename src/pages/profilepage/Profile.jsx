import React from "react";
import { Outlet } from "react-router-dom";
import "./Profile.scss";
import ProfileMenu from "./ProfileMenu";
const Profile = () => {
 
  return (
    <>
      <section className="profile-section" style={{ paddingTop: 200 }}>
        <div className="profile-container">
          <ProfileMenu />
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Profile;
