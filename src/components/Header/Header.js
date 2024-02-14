import heroImg from "../../images/josh.png"
const Header = () => {
  return (
    <header className="text-black mt-8 py-10">
      <div className="flex items-center justify-center">
        <div className="font-[Playfair-bold]">
          <h2 className="text-9xl mb-10 font-black">JOSHUA ✦</h2>
          <h3 className="text-6xl text-end">Software Developer</h3>
          <p className="text-2xl pt-10 text-center">
            Hi my name is Joshua Smith <br />A passionate fullstack developer
            from Chicago
          </p>
        </div>
        <div className="relative">
          <img src={heroImg} className="w-[750px]" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-b from-transparent to-neutral-200"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
