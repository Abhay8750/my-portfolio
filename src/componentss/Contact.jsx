// import React from 'react'
// import "./contact.css"
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
// import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";



// function Contact() {
//     return (
//         <div className='contactpage'>
//             {/* title */}
//             <div className="contact_title">
//                 <h2>Contact</h2>
//                 <h3>Get In Touch</h3>
//             </div>
//             {/*  */}
//             <div className="parentbox">

//                 <div className="contact_box">
//                     <h2>Let's Talk</h2>
//                     <div className="gmail">
//                         <MdEmail /> <span>abhay@example.com</span>
//                     </div>
//                     <div className="phone">
//                         <FaPhoneAlt /> <span>+8750 8764 89</span>
//                     </div>
//                     <div className="map">
//                         <FaMapMarkerAlt /> <span>Faridabad, India</span>
//                     </div>
//                     <div className="logo">
//                         <FaFacebookF />  <FaInstagram /> <FaGithub /> <FaLinkedinIn />
//                     </div>
//                 </div>
//                 {/* input */}
//                 <form className="input">
//                     <input type="text" name="name"  placeholder='Your Name' required />
//                     <input type="text" name="email" placeholder='Your Email' required />
//                     <textarea name="message"  rows="5" placeholder='Your Message' required></textarea>
//                     <button type='submit'>Send Message</button>
//                 </form>
//             </div>

//         </div>
//     )
// }
// export default Contact














import React, { useState } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");   // success / error / loading

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  return (
    <div className="contactpage">

      {/* TITLE */}
      <div className="contact_title">
        <h2>Contact</h2>
        <h3>Get In Touch</h3>
      </div>

      <div className="parentbox">

        {/* LEFT INFO */}
        <div className="contact_box">
          <h2>Let's Talk</h2>

          <div><MdEmail /> <span>abhay@example.com</span></div>
          <div><FaPhoneAlt /> <span>+91 8750 8764 89</span></div>
          <div><FaMapMarkerAlt /> <span>Faridabad, India</span></div>

          <div className="logo">
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
            <FaLinkedinIn />
          </div>
        </div>

        {/* FORM */}
        <form className="input" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p style={{ color: "#38bdf8" }}>Message sent successfully!</p>
          )}

          {status === "error" && (
            <p style={{ color: "red" }}>Please fill all fields.</p>
          )}
        </form>

      </div>
    </div>
  );
}

export default Contact;
