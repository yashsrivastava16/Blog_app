import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.css";

const Navbar = () => {
  let { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "Logout"})
  }

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
          <li className="navListItem">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/write">Write</Link>
          </li>
          <li className="navListItem" onClick={handleLogout}>
            {user && "Logout"}
          </li>
        </ul>
      </div>
      <div className="navRight">
        {
          user ? (
            <Link className="link" to="/settings">
              <i className="navUser fa-solid fa-user"></i>
            </Link>
          ) : (
            <ul className="navList">
              <li className="navListItem">
                <Link className="link" to="/login">Login</Link>
              </li>
              <li className="navListItem">
                <Link className="link" to="/signup">Signup</Link>
              </li>
            </ul>
          )
        }
      </div>
    </div>
  )
};

export default Navbar;
