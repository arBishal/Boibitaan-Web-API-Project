import React, { useState } from "react";
import ProfileBodyStyle from "./profileBody.module.css";
import ProfileInfoCard from "./ProfileInfoCard";

const ProfileBody = () => {
  return (
    <div className={ProfileBodyStyle.profileBody}>
      <ProfileInfoCard />
    </div>
  );
};

export default ProfileBody;
