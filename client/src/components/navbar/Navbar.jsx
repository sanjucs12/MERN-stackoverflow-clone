import React from "react";
import { Link } from "react-router-dom"; //REPLACEMENT FOR <a> TAG
import logo from "../../assets/logo.png";
import { useSelector, useDispatch } from "react-redux"; //to use the redux store
import { useEffect } from "react";
import "./navbar.css";
import search from "../../assets/search-icon.svg";
import Avatar from "../avatar/Avatar";
import { setCurrentUser } from "../../actions/currentUserAction";

const Navbar = () => {
  const User = useSelector((state) => state.currentUserReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))));
  }, [dispatch]);
  // console.log(User);
  return (
    <nav className="main-nav">
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
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              color="white"
              borderRadius="50%"
            >
              <Link
                to="/User"
                style={{ color: "white", textDecoration: "none" }}
              >
                S
              </Link>
            </Avatar>

            <button className="nav-item nav-links">Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
