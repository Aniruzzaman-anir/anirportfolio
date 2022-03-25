import React from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";
import Separator from "../../common/separator";
import { ProjectData } from "../../data/project";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects" id="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
