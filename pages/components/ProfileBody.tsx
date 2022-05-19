import React, { useState } from "react";
import ProfileBodyStyle from "./profileBody.module.css";
import Image from "next/image";
import ProfileInfoCard from "./ProfileInfoCard";

const ProfileBody = () => {
  return (
    <div className={ProfileBodyStyle.profileBody}>
      <div className={ProfileBodyStyle.profileHeader}></div>
      <ProfileInfoCard />
    </div>
  );
};

export default ProfileBody;
