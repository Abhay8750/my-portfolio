import React from 'react'
import pic2 from "./pic2.png"
import "./About.css"
import {  FaHtml5, FaCss3Alt, FaJsSquare,FaReact,FaGitAlt } from "react-icons/fa";

function About() {
  return (
    <div className='about'>
      {/* img */}
      <div className="name_img">
        <img src={pic2} alt="Portfolio" />
      </div>

      <div className='about_section'>
        <h1 className="title">About Me</h1>
          <p className="tagline">
         I'm a frontend developer focused on building clean, responsive and user-friendly web interfaces. I enjoy turning complex problems into simple, beautiful, and intuitive designs using modern web technologies.
        </p>
        <div className="language">
          <ul>
            <li><a href="https://www.w3schools.com/html/"><FaHtml5/><span>HTML</span></a></li>
            <li><a href="https://www.w3schools.com/css/default.asp"><FaCss3Alt/><span>CSS</span></a></li>
            <li><a href="https://www.w3schools.com/js/default.asp"><FaJsSquare/><span>JS</span></a></li>
            <li><a href="https://react.dev/"><FaReact/><span>React</span></a></li>
            <li><a href="https://github.com/"><FaGitAlt/><span>Git</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
