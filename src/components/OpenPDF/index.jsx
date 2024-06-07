import React from "react";

function OpenPDF() {
  const openCV = () => {
    window.open(`${process.env.PUBLIC_URL}/cv/Elise Marie Hogsnes - CV.pdf`, "_blank");
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
