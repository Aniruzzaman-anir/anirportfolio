import React from "react";
import Separator from "../../common/separator";
import SocialCotact from "../../common/social_contact/index";
import "./contact.css";
function Contact() {
  return (
    <div className="contact">
      <Separator></Separator>
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch! Contact me on any of the platform</p>
          <SocialCotact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/resume.odt").default}>
            <i class="devicon-googlecloud-plain"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
