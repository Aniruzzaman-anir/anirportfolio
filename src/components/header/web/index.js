import React from "react";
import "./web.css";
import workIcon from "../../../assets/headerIcons/work.svg";
import contactIcon from "../../../assets/headerIcons/contact.svg";
import projectIcon from "../../../assets/headerIcons/projects.svg";
import skillIcon from "../../../assets/headerIcons/skills.svg";

function Web() {
  const imgSize = {
    width: "30px",
    height: "30px",
  };

  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <img style={imgSize} src={projectIcon} />
          <h3 style={{marginLeft:"10px",marginRight:"15px"}}>Projects</h3>
          
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <img style={imgSize} src={skillIcon} />
          <h3 style={{marginLeft:"10px",marginRight:"15px"}}>Skills</h3>
          
        </a>
      </div>
      {/* <div className='web-option'>
          <a href="#work">
          <img style={imgSize}  src={workIcon}/>
          Works
          </a>
        </div> */}
      <div className="web-option">
        <a href="#contact">
          <img style={imgSize} src={contactIcon} />
          <h3 style={{marginLeft:"10px",marginRight:"15px"}}>Contacts</h3>
          
        </a>
      </div>
    </div>
  );
}

export default Web;
