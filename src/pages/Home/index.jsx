import React from "react";
import profile from "../../images/Elise-Marie-Hogsnes.webp";
import { Icon } from "@iconify/react";
import { skillsData } from "../../components/Skills";
import OpenPDF from "../../components/OpenPDF";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  const Skills = ({ href, icon, text }) => (
    <a href={href} target="_blank" rel="noreferrer" className="grid justify-items-center w-20 transform transition duration-500 hover:scale-125">
      <Icon icon={icon} className="text-5xl" />
      <h3>{text}</h3>
    </a>
  );

  const SkillsList = () => (
    <div className="flex flex-wrap justify-center gap-5 max-w-500 lg:max-w-none">
      {skillsData.map((skill) => (
        <Skills key={skill.text} {...skill} />
      ))}
    </div>
  );

  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center bg-white rounded-lg mt-10 p-4 shadow-card justify-center sm:w-11/12 xl:w-9/12">
        <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-center lg:gap-5">
          <div className="flex flex-col gap-5 text-lg w-11/12 max-w-md text-center sm:flex flex-col gap-5 sm:max-w-435 lg:text-start">
            <h1 className="text-3xl font-semibold">{t("developer")}</h1>
            <h2 className="text-xl">{t("homeIntroduction")}</h2>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              <a href="https://github.com/elli95" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-3xl" aria-label="Github">
                <Icon icon="icon-park:github" className="transform transition duration-500 hover:scale-125" />
              </a>
              <a
                href="https://www.linkedin.com/in/elise-marie-hogsnes-77b13b1aa/?original_referer="
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-3xl"
                aria-label="Linkedin"
              >
                <Icon icon="devicon:linkedin" className="transform transition duration-500 hover:scale-125" />
              </a>
              <OpenPDF />
            </div>
          </div>
          <div className="rounded-full h-52 w-52 overflow-hidden lg:h-80 lg:w-80">
            <img className="object-center object-me-center" src={profile} alt="Elise Marie Hogsnes" />
          </div>
        </div>
        <p className="text-lg pt-5 pb-2.5 font-semibold">| Tech Stack |</p>
        <SkillsList />
      </div>
    </section>
  );
}

export default Home;
