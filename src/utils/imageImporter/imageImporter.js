export const importImages = (filenames) => {
  const images = {};
  filenames.forEach((filename) => {
    images[filename] = require(`../../images/${filename}`);
  });
  return images;
};
