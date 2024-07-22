import logo from "../assets/logo.png";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-scroll";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState();
  const links = [
    { id: 1, name: "Home", path: "home" },
    { id: 2, name: "About us", path: "about" },
    { id: 3, name: "Services", path: "services" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex fixed bg-white min-w-full justify-between min-h-[10vh] items-center lg:px-20 px-5 bg-cover py-5 z-50">
      <div className="flex items-center gap-2">
        <a href="/">
          <img src={logo} className="w-20" />
        </a>
        <div className="flex flex-col">
          <a href="/">
            <h2 className="text-blue-600 text-xl font-semibold">Say IT</h2>
            <span className="text-xs text-blue-500">Get IT Done</span>
          </a>
        </div>
      </div>
      <ul
        className={`flex items-center gap-3 ${
          menuOpen ? "block" : "hidden"
        } md:flex`}
      >
        {links.map(({ id, name, path }) => (
          <Link
            key={id}
            to={path}
            className="text-blue-500 cursor-pointer text-base font-semibold px-4 py-2 rounded-full hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-400 transition-all duration-500"
          >
            {name}
          </Link>
        ))}
      </ul>
      <div>
        <Link
          to="contact"
          className="
          px-4 py-3 bg-gradient-to-r text-center cursor-pointer from-blue-400 to-purple-500 text-white rounded-tl-xl rounded-bl-xl rounded-br-xl rounded-tr-0 shadow-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-400 transition-all duration-700 w-32 h-10
          "
        >
          Contact us
        </Link>
      </div>{" "}
      <BiMenu
        className="block md:hidden text-3xl cursor-pointer bg-gradient-to-r text-center hover:from-purple-500 hover:to-blue-400 transition-all duration-700 w-10 h-10 p-2"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Header;
