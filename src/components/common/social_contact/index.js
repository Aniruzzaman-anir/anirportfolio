import React from "react";
import "./social_contact.css";
import facebookLogo from "../../../assets/icons/facebook.svg";
import githubLogo from "../../../assets/icons/github.svg";
import instagramLogo from "../../../assets/icons/instagram.svg";

function SocialContact() {
  const font_size = {
    fontSize: "50px",
  };

  return (
    <div className="social-contact">
      <a href="https://web.facebook.com/URwastingyourtimedude/" target="blank">
        <div className="social-icon-div">
          <i style={font_size} class="devicon-facebook-plain colored"></i>
        </div>
      </a>
      <a href="https://github.com/Aniruzzaman-anir" target="blank">
        <div className="social-icon-div">
          <i style={font_size} class="devicon-github-original"></i>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/anirruzzaman-anir-4046ba143/"
        target="blank"
      >
        <div className="social-icon-div">
          <i style={font_size} class="devicon-linkedin-plain colored"></i>
        </div>
      </a>
      <a href="www.twitter.com" target="blank">
        <div className="social-icon-div">
          <i style={font_size} class="devicon-twitter-original colored"></i>
        </div>
      </a>
    </div>
  );
}

export default SocialContact;
