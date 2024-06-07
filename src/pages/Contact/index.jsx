import React from "react";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col bg-white rounded-lg mt-10 p-4 shadow-card items-center justify-center sm:w-11/12 xl:w-9/12">
        <h2 className="text-3xl font-semibold p-2.5">Get in Touch</h2>
        <h2 className="text-xl text-center pb-10 max-w-460">
          Got questions, a project, or just want to say hi? Reach out anytime! I'm always eager to discuss new ideas and opportunities!
        </h2>
        <div className="flex flex-col flex-wrap items-center text-xl justify-center gap-10">
          <a
            href="https://github.com/elli95"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 transform transition duration-500 hover:scale-125"
          >
            <Icon icon="icon-park:github" /> Elli95
          </a>
          <a
            href="https://www.linkedin.com/in/elise-marie-hogsnes-77b13b1aa/?original_referer="
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 transform transition duration-500 hover:scale-125"
          >
            <Icon icon="devicon:linkedin" /> Elise Marie Hogsnes
          </a>
          <a href="mailto:elise-marie.h@hotmail.com" className="flex items-center gap-1 transform transition duration-500 hover:scale-125">
            <Icon icon="ci:mail" />
            <p>Elise-marie.h@hotmail.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
