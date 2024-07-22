import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../assets/logo.png";
import {Link} from "react-scroll"
const Footer = () => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  const usefulLinks = [
    { id: 1, name: "Home", path: "home" },
    { id: 2, name: "About", path: "about" },
    { id: 3, name: "Services", path: "services" },
    // { id: 4, name: "Portfolio", path: "/portfolio" },
    { id: 5, name: "Contact", path: "contact" },
  ];
  const socialLinks = [
    { id: 1, icon: <FaFacebookF />, link: "" },
    { id: 2, icon: <FaXTwitter />, link: "" },
    { id: 3, icon: <FaInstagram />, link: "" },
    { id: 4, icon: <FaLinkedinIn />, link: "" },
  ];

  return (
    <footer className="bottom-0 w-full flex flex-col gap-3  px-28 bg-blue-600 py-10">
      <section className="flex lg:flex-row flex-col gap-3 justify-between lg:items-start items-center">
        <div className="lg:w-[25%] w-full flex items-center gap-4 ">
          <img src={logo} className="w-32" />
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-semibold text-white">Say IT</h2>
            <span className="text-xs text-white">Get IT Done</span>
            <span className="text-xs text-white">Start IT India</span>
          </div>
        </div>
        <div className="flex lg:gap-2 gap-5 lg:w-[60%] w-full lg:flex-row flex-col-reverse lg:items-start items-center">
          <ul className="flex flex-col gap-2 w-[35%]">
            {usefulLinks.map(({ id, name, path }) => (
              <Link
                className="text-md text-white font-semibold cursor-pointer"
                to={path}
                key={id}
              >
                {name}
              </Link>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <span className="border-blue-500 text-white rounded-full border-2 pl-5">
              Let&apos;s{" "}
              <button
                className="bg-gradient-to-r w-44 text-center from-blue-400 to-blue-500 text-white rounded-full shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 transition-all duration-700 px-2 py-2"
              >
                Contact
              </button>{" "}
            </span>
            <ul className="flex gap-2">
              {socialLinks.map(({ id, icon, link }) => (
                <Link
                  className="border-2 cursor-pointer border-white text-white font-semibold text-xl shadow-xl hover:bg-white hover:text-blue-500 transition-all duration-700 p-3 rounded-full"
                  to={link}
                  key={id}
                >
                  {icon}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="border-t-2 text-white pt-5 flex flex-col items-center border-blue-200/40">
        <span>&copy; {currentYear} All rights reserved. </span>
        <span className="flex items-center gap-2">Made with <FaHeart className="text-white"/> in India  </span>
      </section>
    </footer>
  );
};

export default Footer;
