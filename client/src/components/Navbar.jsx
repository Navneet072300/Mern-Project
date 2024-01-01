import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Mern</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                {" "}
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/register">Sign Up</NavLink>
              </li>
              <li>
                {" "}
                <NavLink to="/Login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
