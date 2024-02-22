import { useEffect, useState } from "react";
import ContactButton from "../UI/ContactButton/ContactButton";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const stickyScrollPoint = 180;
    setIsSticky(window.scrollY >= stickyScrollPoint);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`text-black font-[Playfair] flex items-center justify-between py-7 px-24 border-b border-gray-300 ${
        isSticky ? "fixed top-0 bg-neutral-200 shadow-lg z-[100] w-full" : ""
      }`}
    >
      <h1 className="text-4xl">Joshua.dev</h1>
      <ul className="flex gap-24 text-gray-500 text-xl">
        <li className="transition-colors duration-200 hover:text-black hover:cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li className="transition-colors duration-200 hover:text-black hover:cursor-pointer">
          <a href="#about-me">About Me</a>
        </li>
        <li className="transition-colors duration-200 hover:text-black hover:cursor-pointer">
          <a href="#skills">Skills</a>
        </li>
        <li className="transition-colors duration-200 hover:text-black hover:cursor-pointer">
          <a href="#portfolio">Portfolio</a>
        </li>
      </ul>
      <ContactButton />
    </nav>
  );
};

export default Navbar;
