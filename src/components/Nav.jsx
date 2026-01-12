import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <>
      <nav className="main_div">

        {/* LOGO */}
        <div className="logo">
          <NavLink className="links" to="/">
            Portfolio
          </NavLink>
        </div>

        {/* MENU */}
        <ul className="ul_section">
          <li>
            <NavLink className="link" to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/service">
              Service
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

      </nav>
      <Outlet />
    </>
  );
}

export default Nav;



//
// 🔹 What NavLink does

// Automatically adds active class

// Only when route matches URL