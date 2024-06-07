import React from "react";
// import { Icon } from "@iconify/react";
// import { skillsData } from "../../components/Skills";

function About() {
  // const Skills = ({ href, icon, text }) => (
  //   <a href={href} target="_blank" rel="noreferrer" className="grid justify-items-center w-20">
  //     <Icon icon={icon} className="text-5xl" />
  //     <h3>{text}</h3>
  //   </a>
  // );

  // const SkillsList = () => (
  //   <div className="flex flex-wrap justify-center gap-5">
  //     {skillsData.map((skill) => (
  //       <Skills key={skill.text} {...skill} />
  //     ))}
  //   </div>
  // );

  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center bg-white rounded-lg mt-10 p-4 shadow-card justify-evenly sm:w-11/12 xl:w-9/12">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-center lg:gap-5">
          <div className="flex flex-col gap-5 text-lg w-11/12 sm:flex flex-col gap-5 sm:w-10/12 lg:w-3/5 lg:w-2/5">
            <p>Greetings! I'm Elise Marie Hogsnes, a passionate Front-end Developer from Tønsberg, Norway.</p>
            <p>
              I am a structured and solution-oriented individual who loves learning new things. With experience in React, Tailwind CSS, and JavaScript
              that allows me to build dynamic and responsive web applications that surpass user expectations. My skill set also includes CSS, HTML,
              Figma, WordPress, SASS, and Bootstrap, allowing me to create comprehensive and visually appealing user experiences.
            </p>
            <p>
              When I'm not coding, I enjoy a variety of hobbies and activities that keep me balanced and inspired. I love playing games, engaging in
              various crafts, and taking leisurely walks in the forest. I also have a passion for cooking and enjoy experimenting with new recipes.
              During the winter months, I cherish skiing trips with my family, enjoying the beautiful Norwegian landscapes.
            </p>
            <p>
              I recently graduated in front-end development from Noroff - School of Technology and Digital Media. And I am currently on the lookout
              for new opportunities to apply my skills to engaging projects and work with other passionate professionals. If you're in need of a
              front-end developer who is dedicated to excel, let's get in <a href="#contact">touch!</a>
            </p>
          </div>
        </div>
        {/* <p className="text-lg pt-5">Some of the technologies I have used so far include:</p>
        <SkillsList /> */}
      </div>
    </section>
  );
}

export default About;
