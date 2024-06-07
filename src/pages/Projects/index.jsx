import React from "react";
import { Icon } from "@iconify/react";
import { ProjectData } from "../../components/ProjectData";

function Projects() {
  const Projects = ({ imgSrc, imgAlt, hrefGit, hrefSite, title, text }) => (
    <div className="max-w-500 bg-white rounded-lg shadow-card">
      <div className="max-w-500 max-h-60 overflow-hidden">
        <img src={imgSrc} alt={imgAlt} className="rounded-t-lg" />
      </div>
      <div className="p-2.5">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-lg sm:h-28">{text}</p>
        <div className="flex flex-wrap justify-around text-lg gap-2.5 pt-2.5 sm:pt-0">
          <a href={hrefGit} target="_blank" rel="noreferrer" className="flex items-center gap-1">
            <Icon icon="icon-park:github" /> GitHub Repository
          </a>
          <a href={hrefSite} target="_blank" rel="noreferrer" className="flex items-center gap-1">
            <Icon icon="mdi:internet" /> Website
          </a>
        </div>
      </div>
    </div>
  );

  const ProjectsList = () => (
    <div className="flex flex-wrap justify-center gap-10 max-w-1580">
      {ProjectData.map((data) => (
        <Projects key={data.text} {...data} />
      ))}
    </div>
  );

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl p-5">My projects</h2>
      <ProjectsList />
    </section>
  );
}

export default Projects;
