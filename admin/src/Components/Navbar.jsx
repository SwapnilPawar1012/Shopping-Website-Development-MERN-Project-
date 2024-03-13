import React from "react";
import navlogo from "../Assets/nav-logo.png";
import navProfile from "../Assets/nav-profile.svg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  );
};
