import React from "react";
import "./mobile.css";
import workIcon from "../../../assets/headerIcons/work.svg";
import contactIcon from "../../../assets/headerIcons/contact.svg";
import projectIcon from "../../../assets/headerIcons/projects.svg";
import skillIcon from "../../../assets/headerIcons/skills.svg";

function Mobile({ isOpen, setIsOpen }) {
  const imgSize = {
    width: "35px",
    height: "35px",
  };
  return (
    <div className="mobile">
      <div className="class-icon" onClick={() => setIsOpen(!isOpen)}>
        <img
          style={imgSize}
          src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png"
        />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <img style={imgSize} src={projectIcon} />
            Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <img style={imgSize} src={skillIcon} />
            Skills
          </a>
        </div>
        {/* <div className='mobile-option'>
      <a href="#work">
      <img style={imgSize}  src={workIcon}/>
      </a>
    </div> */}
        <div className="mobile-option">
          <a href="#contact">
            <img style={imgSize} src={contactIcon} />
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
