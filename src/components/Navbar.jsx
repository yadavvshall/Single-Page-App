
import React from "react";
import { GoSearch } from "react-icons/go";
import { BiMessageDetail } from "react-icons/bi";
import { VscBellDot } from "react-icons/vsc";
import { TbMessage } from "react-icons/tb";
import { HiHand } from "react-icons/hi"; 

const Navbar = () => {
  const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end", 
    height: "4rem", 
    backgroundColor: "#fff",
    color: "#000",
    padding: "1rem",
  };

  const iconContainerStyles = {
    marginRight: "2.5rem", 
    borderRadius: "100%", 
    background: "white", 
    padding: "0.3rem", 
  };

  const iconStyles = {
    borderRadius: "50%", 
    fontSize: "24px", 
  };

  const handIconStyles = {
    color: "yellow", 
    marginLeft: "0.5rem", 
  };

  const profileStyles = {
    display: "flex",
    alignItems: "center",
    marginLeft: "1rem", 
  };

  const helloStyles = {
    display: "flex",
    alignItems: "center",
    marginRight: "auto", 
    marginLeft: "1rem", 
  };

  return (
    <div style={containerStyles}>
      <div style={helloStyles}>
        Hello <HiHand style={handIconStyles} />
      </div>
      <div style={iconContainerStyles}>
        <GoSearch style={iconStyles} />
      </div>
      <div style={iconContainerStyles}>
        <BiMessageDetail style={iconStyles} />
      </div>
      <div style={iconContainerStyles}>
        <TbMessage style={iconStyles} />
      </div>
      <div style={iconContainerStyles}>
        <VscBellDot style={iconStyles} />
      </div>
      <div style={profileStyles}>
        <img
          src="https://placekitten.com/40/40" 
          alt="Profile"
          style={{ borderRadius: "50%", width: "40px", height: "40px" }}
        />
        <div>
          <p className="font-semibold">John Doe</p>
          <p className="text-sm">Profile Headline</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
