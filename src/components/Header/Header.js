import HeroImage from "../UI/HeroImage/HeroImage";
import TypingEffect from "../UI/TypingEffect/TypingEffect";
import PortfolioButton from "../UI/PortfolioButton/PortfolioButton";
import HireMeButton from "../UI/HireMeButton/HireMeButton";


const Header = () => {
  return (
    <header id="home" className="text-black pt-28 mt-[-6rem] pb-10">
      <div className="flex items-center justify-center pt-16 pb-28">
        <div className="font-[Playfair-bold]  w-[750px]">
          <h2 className="text-9xl pb-12 font-black">JOSHUA ✦</h2>

          <TypingEffect
            text="SOFTWARE DEVELOPER"
            typingSpeed={100}
            styles="text-6xl text-end  flex"
          />

          <p className="text-2xl py-10 text-center">
            Hi my name is Joshua Smith <br />A passionate fullstack developer
            from Chicago
          </p>
          <div className="flex justify-around pt-2">
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
