import React from "react";
import Navbar from "./components/Navbar";
import ProfileBody from "./components/ProfileBody";
import profileStyle from "./components/profileBody.module.css";
import Footer from "./components/Footer";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <ProfileBody />
      <Footer />
    </div>
  );
};

export default Profile;