import React from "react";
import resume from "./Abhay_Resume1.pdf";
import portfolioImg from "./portfolio.png";
import "./Header.css";
import About from "../componentss/About"
import Service from "../componentss/Services"
import Portfolio from "../componentsss/Portfollio"
import Contact from "../componentss/Contact";
import {Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        {/* LEFT SIDE */}
        <div className="name">
          <h3 className="role">Frontend Developer</h3>

          <h1 className="title">
            Hi, I'm <span>Abhay</span>
          </h1>

          <h2 className="location">From Faridabad</h2>

          <p className="tagline">
            I build modern & responsive web applications.
          </p>

          <div className="cta">
            <Link to="/contact">
              <button className="primary">Hire Me</button>
            </Link>

            <a href={resume} download>
              <button className="outline">Download CV</button>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="name_img">
          <img src={portfolioImg} alt="Portfolio" />
        </div>
      </div>

      <About />
      <Service />
      <Portfolio />
      <Contact />

      <Outlet />

    </>

  );
}

export default Header;
