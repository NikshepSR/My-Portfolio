import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card" onClick={() => window.open(link, "_blank")}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
