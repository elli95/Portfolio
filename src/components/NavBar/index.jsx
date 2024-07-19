import { useTranslation } from "react-i18next";
import "./NavBar.css";
import { useEffect, useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const { i18n } = useTranslation();

  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [showOptionsLang, setShowOptionsLang] = useState(false);
  const [language, setLanguage] = useState("en");
  const menuRef = useRef(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    setShowOptionsLang(false);
  };

  const toggleOptionsMenu = () => {
    setShowOptionsMenu(!showOptionsMenu);
  };

  const toggleOptionsLang = () => {
    setShowOptionsLang(!showOptionsLang);
  };

  const closeMenu = () => {
    setShowOptionsMenu(false);
  };

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const navMenue = () => (
    <ul className="flex-col bg-nav-color ">
      <li>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
      </li>
      <li>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <header className="bg-nav-color text-black shadow-header">
      <div onClick={toggleOptionsMenu} className="flex cursor-pointer">
        <FontAwesomeIcon icon={faBars} className="fontAwesomeIconStyle menuIcon" />
      </div>
      <div>
        {showOptionsMenu && (
          <nav ref={menuRef} className="flex flex-col justify-center bg-nav-color text-black z-10 text-2xl">
            {navMenue()}
          </nav>
        )}
      </div>
      <nav ref={menuRef} className="navMenuBig flex-col justify-center bg-nav-color text-black z-10 text-2xl">
        {navMenue()}
      </nav>
      <div className="flex flex-col justify-center bg-nav-color text-black z-10 text-xl">
        <div onClick={toggleOptionsLang} className="flex cursor-pointer gap-2.5">
          <FontAwesomeIcon icon={faGlobe} className="fontAwesomeIconStyle" />
          <div>{language === "en" ? "English" : "Norsk"}</div>
        </div>
        {showOptionsLang && (
          <div className="language bg-nav-color text-black shadow-header text-xl">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("no")}>Norsk</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
