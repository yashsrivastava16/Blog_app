import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navSocial fa-brands fa-instagram"></i>
        <i className="navSocial fa-brands fa-pinterest"></i>
        <i className="navSocial fa-brands fa-facebook"></i>
        <i className="navSocial fa-brands fa-twitter"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">Home</li>
          <li className="navListItem">About</li>
          <li className="navListItem">Contact</li>
          <li className="navListItem">Write</li>
        </ul>
      </div>
      <div className="navRight">
        <i className="navUser fa-solid fa-user"></i>
        <i className="navSearch fa-solid fa-search"></i>
      </div>
    </div>
  )
};

export default Navbar;
