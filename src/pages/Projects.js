import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";
import SlideInWrapper from "../components/SlideInWrapper";

const Projects = () => {
  return (
    <SlideInWrapper>
      <div className="projects">
        <h1>My Projects</h1>
        <div className="project-card-container">
          <ProjectCard
            title="Restaurant-website"
            description="Static Website for a Pure Veg Restaurant built with React.js."
            link="https://nalapaakapureveg.in/"
          />
          <ProjectCard
            title="Wordpress Plugin"
            description="A WordPress plugin that allows users to upload an Excel file, which is then displayed as a table on the site, developed using PHP."
            link="https://github.com/nikki3383/excel-table-plugin"
          />
          <ProjectCard
            title="Matrimonial Site"
            description="A Kannada matrimonial website crafted in Figma and built with React."
            // link=""
          />
        </div>
      </div>
    </SlideInWrapper>
  );
};

export default Projects;
