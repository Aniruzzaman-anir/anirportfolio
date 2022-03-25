import React from "react";
import "./about.css";
import logo from "../../../assets/Programmer.svg";
import SocialContact from "../../common/social_contact";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👏, I am
          <br />
          <span className="info-name">Aniruzzaman anir</span>
          <br />I love to do frontend of a web-application. Also it always feels good to do work with javascript and with it's various libraries.
        </div>
        <div className="about-photo">
          <img className="picture" src={logo} />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
