import React from "react";
import { Icon } from "@iconify/react";
import ProjectData from "../../components/ProjectData";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const projectData = ProjectData();

  const ProjectCard = ({ imgSrc, imgAlt, hrefGit, hrefSite, title, text }) => (
    <div className="max-w-500 bg-white rounded-lg shadow-card">
      <div className="max-w-500 max-h-60 overflow-hidden">
        <img src={imgSrc} alt={imgAlt} className="rounded-t-lg" />
      </div>
      <div className="p-2.5">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-lg sm:h-28">{text}</p>
        <div className="flex flex-wrap justify-around text-lg gap-2.5 pt-2.5 sm:pt-0">
          <a href={hrefGit} target="_blank" rel="noreferrer" className="flex items-center gap-1 transform transition duration-500 hover:scale-125">
            <Icon icon="icon-park:github" /> GitHub Repository
          </a>
          <a href={hrefSite} target="_blank" rel="noreferrer" className="flex items-center gap-1 transform transition duration-500 hover:scale-125">
            <Icon icon="mdi:internet" /> {t("website")}
          </a>
        </div>
      </div>
    </div>
  );

  const ProjectsList = () => (
    <div className="flex flex-wrap justify-center gap-10 max-w-1580">
      {projectData.map((data, index) => (
        <ProjectCard key={index} {...data} />
      ))}
    </div>
  );

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-semibold p-5">{t("projects")}</h2>
      <ProjectsList />
    </section>
  );
}

export default Projects;
