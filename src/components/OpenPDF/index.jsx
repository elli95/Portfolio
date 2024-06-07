import React from "react";

function OpenPDF() {
  const openCV = () => {
    window.open(`${process.env.PUBLIC_URL}/cv/Elise Marie Hogsnes - CV.pdf`, "_blank");
  };

  return (
    <div>
      <button onClick={openCV}>CV</button>
    </div>
  );
}

export default OpenPDF;
