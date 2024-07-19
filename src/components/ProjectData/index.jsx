import { useTranslation } from "react-i18next";
import { importImages } from "../../utils/imageImporter/imageImporter";

const imageFilenames = [
  "JavaScript-Frameworks-CA.webp",
  "communitycciencemuseum-screenshot.webp",
  "project-exam-2-holidaze.webp",
  "rainydays-screenshot.webp",
  "readme-img-semester-project-2.webp",
  "thecozycookingpot-screenshot.webp",
];

const images = importImages(imageFilenames);

const ProjectData = () => {
  const { t } = useTranslation();

  return [
    {
      imgSrc: images["project-exam-2-holidaze.webp"],
      imgAlt: "The main page of the Holidaze project.",
      title: "Holidaze",
      text: t("holidazeText"),
      hrefGit: "https://github.com/elli95/Project-Exam-2-Holidaze",
      hrefSite: "https://deft-custard-1af5d7.netlify.app/",
    },
    {
      imgSrc: images["JavaScript-Frameworks-CA.webp"],
      imgAlt: "The main page of the avaScript Frameworks project.",
      title: "JavaScript Frameworks CA",
      text: t("jsFrameworksText"),
      hrefGit: "https://github.com/elli95/JavaScript-Frameworks-CA",
      hrefSite: "https://stupendous-tanuki-02c784.netlify.app/",
    },
    {
      imgSrc: images["readme-img-semester-project-2.webp"],
      imgAlt: "The main page of the AuctionLock project.",
      title: "AuctionLock",
      text: t("auctionLockText"),
      hrefGit: "https://github.com/elli95/Semester-Project-2",
      hrefSite: "https://precious-nougat-992bd6.netlify.app/",
    },
    {
      imgSrc: images["communitycciencemuseum-screenshot.webp"],
      imgAlt: "The Community Science Museum project’s main page, featuring an introduction and a section for children, teachers, and researchers.",
      title: "Community Science Museum",
      text: t("communityScienceText"),
      hrefGit: "https://github.com/elli95/Semester-Project-1_Community-Science-Museum_Elise-Marie-Hogsnes",
      hrefSite: "https://dapper-shortbread-d8a0e8.netlify.app/",
    },
    {
      imgSrc: images["rainydays-screenshot.webp"],
      imgAlt: "The Rainy Day project’s main page showcases a brief introduction, featured products, and an outdoor category. ",
      title: "Rainy Day",
      text: t("rainyDayText"),
      hrefGit: "https://github.com/elli95/Cross-Course-Project_Rainy-Day_Elise-Marie-Hogsnes",
      hrefSite: "https://friendly-zuccutto-172753.netlify.app/",
    },
    {
      imgSrc: images["thecozycookingpot-screenshot.webp"],
      imgAlt: "The Cozy Cooking Pot project’s main page features a concise introduction and a row of four blog posts or recipes.",
      title: "The Cozy Cooking Pot",
      text: t("cozyCookingText"),
      hrefGit: "https://github.com/Noroff-FEU-Assignments/project-exam-1-elli95",
      hrefSite: "https://tourmaline-horse-b596b3.netlify.app/",
    },
  ];
};

export default ProjectData;
