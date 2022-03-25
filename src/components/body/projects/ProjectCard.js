import React, { useEffect, useState } from "react";
import "./project_card.css";
import phantomtyper from "../../../assets/phantomtyper.png"
import phantomshare from "../../../assets/phantomimage.png"
import fireblog from "../../../assets/fireblog.png"

export default function ProjectCard({ project }) {

  let imgSrc = useState("");


    if(project.image === "phatomshare"){
      imgSrc = phantomshare
    } else if( project.image === "phantomtyper"){
      imgSrc = phantomtyper
    } else if(project.image === "fireblog"){
      imgSrc = fireblog
    } else (
      imgSrc = phantomshare
    )



  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-link">
          {project.demo && (
            <a className="project-link" target={"_blank"} href={project.demo}>
              <div className="link-button">
                <img src={require("../../../assets/earth.png")}></img>
                <span style={{ paddingLeft: "7px" }}>View</span>
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" target={"_blank"} href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i>
                <span style={{ paddingLeft: "7px" }}>Github</span>
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>

      <img
        style={{ width: "390px" }}
        src={imgSrc}
        className="project-photo"
      ></img>
    </div>
  );
}
