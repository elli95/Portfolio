import React from "react";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col bg-white rounded-lg mt-10 p-4 shadow-card items-center justify-evenly w-11/12">
        <h2 className="text-3xl p-5">Get in Touch</h2>
        <div className="flex flex-wrap items-center text-xl justify-center gap-14">
          <a href="https://github.com/elli95" target="_blank" rel="noreferrer" className="flex items-center gap-1">
            <Icon icon="icon-park:github" /> Elli95
          </a>
          <a
            href="https://www.linkedin.com/in/elise-marie-hogsnes-77b13b1aa/?original_referer="
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1"
          >
            <Icon icon="devicon:linkedin" /> Elise Marie Hogsnes
          </a>
          <div className="flex items-center gap-1">
            <Icon icon="ci:mail" />
            <p>Elise-marie.h@hotmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
