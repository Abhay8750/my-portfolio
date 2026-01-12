import React from 'react'
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./Footer.css"


function Footer() {
  return (
    <div className='footer'>

      <div className="main">
        {/* title */}
        <div className='title'>
          <h1 className="title">Abhay</h1>
          <p className="tagline">
            Fronted Developer building modren and resposive web application.
          </p>
          <ul>
            <li><a href="https://github.com"><FaGithub /></a></li>
            <li><a href="https://linkedin.com"><FaLinkedinIn /></a></li>
            <li><a href="https://instagram.com"><FaInstagram /></a></li>
            <li><a href="https://facebook.com"><FaFacebookF /></a></li>
          </ul>
        </div>

        {/* Links */}
        <div className='link'>
          <h1>Links</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Service">Service</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        {/* contact */}
        <div className='contact'>
          <h1>Contact</h1>
          <p>
            <MdEmail /><span><a href="###abhaypa875@gmail.com###">abhaypa875@gmail.com</a></span>
          </p>
          <p>
            <FaPhoneAlt /><span><a href="###+8750 8764 89###">+8750 8764 89</a></span>
          </p>

        </div>

      </div>

      <div className="2026">
        <h3>@2026 Abhay . All rights reserved</h3>
      </div>
    </div>
  )
}

export default Footer
