import "./NavBar.css";

function NavBar() {
  return (
    <nav className="flex flex-col bg-nav-color text-black shadow-header z-10 text-xl">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
