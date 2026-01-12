import React from 'react'
import { FaCode, FaMobileAlt, FaReact, FaPaintBrush } from "react-icons/fa";
import "./services.css"
function Services() {
  return (
    <div className='service'>
      {/* title of services */}
      <div className="service_pro">
        <h2>Services</h2>
        <h3>What I Do Fro You</h3>
      </div>
      {/* list of services */}
      <div className="service_list">

            <div className="first">
                <div className="font">
                     <li><FaCode/></li>
                     <h1>Fronted Development</h1>
                </div>
                   <p>Building modren and clean websites suing HTML, CSS , and JavaScript</p>
            </div>
            {/*  */}
            <div className="second">
                <div className="font">
                     <li><FaMobileAlt/></li>
                     <h1>Responsive Design</h1>
                </div>
                   <p>Mobile-first layouts that work on all devices</p>
            </div>
            {/*  */}
            <div className="third">
                <div className="font">
                     <li><FaReact/></li>
                     <h1>React Applications</h1> 
                </div>
                   <p>Single-page applications with reusable components</p>
            </div>
            {/*  */}
            <div className="fourth">
                <div className="font">
                     <li><FaPaintBrush/></li>
                     <h1>UI Implementation</h1> 
                </div>
                   <p>Turning designs into functional fronted interfaces</p>
            </div>
      </div>

    </div>
  )
}

export default Services
