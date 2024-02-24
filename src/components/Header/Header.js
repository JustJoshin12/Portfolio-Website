import HeroImage from "../UI/HeroImage/HeroImage";
import TypingEffect from "../UI/TypingEffect/TypingEffect";
import PortfolioButton from "../UI/PortfolioButton/PortfolioButton";
import HireMeButton from "../UI/HireMeButton/HireMeButton";


const Header = () => {
  return (
    <header id="home" className="text-black pt-28 mt-[-6rem] pb-10">
      <div className="flex items-center justify-center pt-16 pb-28 px-6">
        <div className="flex flex-col items-center font-[Playfair-bold]  w-[750px]">
          <h2 className="lg:text-7xl xl:text-9xl pb-12 font-black">JOSHUA ✦</h2>

          <TypingEffect
            text="SOFTWARE DEVELOPER"
            typingSpeed={100}
            styles="lg:text-4xl xl:text-6xl xl:justify-center text-end flex"
          />

          <p className=" lg:text-xl xl:text-2xl py-10 text-center justify-evenly">
            Hi my name is Joshua Smith <br />A passionate fullstack developer
            from Chicago
          </p>
          <div className="flex lg:gap-[140px] xl:gap-[200px] pt-2">
            <HireMeButton/>
            <PortfolioButton/>
          </div>
        </div>
        <div className="relative ml-10">
          <HeroImage/>
        </div>
      </div>
    </header>
  );
};

export default Header;
