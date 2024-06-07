import React from "react";
import profile from "../../images/Elise-Marie-Hogsnes.webp";
import { Icon } from "@iconify/react";
import { skillsData } from "../../components/Skills";
import OpenPDF from "../../components/OpenPDF";

function Home() {
  const Skills = ({ href, icon, text }) => (
    <a href={href} target="_blank" rel="noreferrer" className="grid justify-items-center w-20">
      <Icon icon={icon} className="text-5xl" />
      <h3>{text}</h3>
    </a>
  );

  const SkillsList = () => (
    <div className="flex flex-wrap justify-center gap-5">
      {skillsData.map((skill) => (
        <Skills key={skill.text} {...skill} />
      ))}
    </div>
  );

  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center bg-white w-11/12 rounded-lg mt-10 p-4 shadow-card justify-evenly">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-center lg:gap-5">
          <div className="flex flex-col gap-5 text-lg w-11/12 max-w-md text-center sm:flex flex-col gap-5 sm:w-10/12 lg:w-3/5 lg:w-2/5 lg:text-start">
            <h1 className="text-2xl font-semibold">Front-end Developer</h1>
            <p>Hello! I'm Elise Marie Hogsnes, a Front-end Developer with a passion for coding, based in Tønsberg, Norway.</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              <a href="https://github.com/elli95" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-3xl">
                <Icon icon="icon-park:github" />
              </a>
              <a
                href="https://www.linkedin.com/in/elise-marie-hogsnes-77b13b1aa/?original_referer="
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-3xl"
              >
                <Icon icon="devicon:linkedin" />
              </a>
              <OpenPDF />
            </div>
          </div>
          <div className="rounded-full h-52 w-52 overflow-hidden lg:h-80 lg:w-80">
            <img className="object-center object-me-center" src={profile} alt="Elise Marie Hogsnes" />
          </div>
        </div>
        <p className="text-lg pt-5">| Tech Stack |</p>
        <SkillsList />
      </div>
    </section>
  );
}

export default Home;
