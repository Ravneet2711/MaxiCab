import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import "./StyleSheets/contact.css";

const Contact = () => {
  return (
    <div className="contact-card card bg-dark ">
      <div className="container">
        <h2>Contact with us now</h2>
        <div className="contact-details  ">
          <a href="/contact" className="email">
            <i>
              <EmailIcon />
            </i>
            booking@callmaxicab.com.au
          </a>
          <a href="/contact" className="contact">
            <i>
              <CallIcon />
            </i>
            +61 414322847
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
