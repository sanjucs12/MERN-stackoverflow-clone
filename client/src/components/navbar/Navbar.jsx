import React from "react";
import { Link } from "react-router-dom"; //REPLACEMENT FOR <a> TAG
import logo from "../../assets/logo.png";
import "./navbar.css";
import search from "../../assets/search-icon.svg";
import Button from "../button/Button";
import Avatar from "../avatar/Avatar";

const Navbar = () => {
  var User = null;
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} alt="search" width="18" className="search-icon" />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Link to="/">
              <Avatar>Sanju</Avatar>
            </Link>
            <Button>Log out</Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
