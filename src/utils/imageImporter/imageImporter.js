// export const importImages = (filenames) => {
//   const images = {};
//   filenames.forEach((filename) => {
//     images[filename] = require(`../../images/${filename}`);
//   });
//   return images;
// };

export const importImages = (filenames) => {
  const allImages = import.meta.glob("../../images/*", { eager: true });
  const images = {};

  filenames.forEach((filename) => {
    const matched = Object.entries(allImages).find(([key]) => key.endsWith(filename));
    if (matched) {
      images[filename] = matched[1].default;
    } else {
      console.warn(`Image not found: ${filename}`);
    }
  });

  return images;
};
