const Navbar = () => {
  return (
    <nav className="text-black font-[Playfair] flex items-center justify-between px-10 py-7 border-b border-gray-300">
      <h1 className="text-4xl">Joshua.com</h1>
      <ul className="flex gap-24 text-gray-500 text-xl">
        <li className="transition-colors duration-200 hover:text-black hover:cursor-pointer">
          <a>About Me</a>
        </li>
        <li className="transition-colors duration-200 hover:text-black hover:cursor-pointer">
          <a>Skills</a>
        </li>
        <li className="transition-colors duration-200 hover:text-black hover:cursor-pointer">
          <a>Portfolio</a>
        </li>
      </ul>
      <button className="text-xl p-6 transition-colors duration-500 font-bold font-[Playfair] hover:text-white hover:bg-black rounded">
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
