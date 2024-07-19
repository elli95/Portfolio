import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center bg-white rounded-lg mt-10 p-4 py-7 shadow-card justify-center sm:w-11/12 xl:w-9/12">
        <h2 className="text-3xl font-semibold pb-2.5">{t("about")}</h2>
        <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-center lg:gap-5">
          <div className="flex flex-col gap-5 text-xl w-11/12 sm:flex flex-col gap-5 sm:w-10/12 lg:w-3/5 lg:w-2/5">
            <p>{t("about1")}</p>
            <p>{t("about2")}</p>
            <p>{t("about3")}</p>
            <p>
              {t("about4")}{" "}
              <a href="#contact" className="hover:underline">
                {t("aboutLink")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
