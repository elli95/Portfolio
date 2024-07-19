import React from "react";
import { useTranslation } from "react-i18next";

function OpenPDF() {
  const { i18n } = useTranslation();

  const openCV = () => {
    const language = i18n.language;
    let cvFile = "Elise Marie Hogsnes - CV.pdf";

    if (language === "no") {
      cvFile = "Elise Marie Hogsnes - CV_NO.pdf";
    }

    window.open(`${process.env.PUBLIC_URL}/cv/${cvFile}`, "_blank");
  };

  return (
    <div>
      <button className="font-semibold transform transition duration-500 hover:scale-125 border-2 border-black px-1 rounded" onClick={openCV}>
        CV
      </button>
    </div>
  );
}

export default OpenPDF;
