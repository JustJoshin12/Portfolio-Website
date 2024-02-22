import { useInView } from "react-intersection-observer";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutMe from "../AboutMeSection/AboutMe";
import SkillSection from "../SkillSection/SkillSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import ArtistHarmonyHubVideo from "../../videos/ArtistHarmonyHubVideo.mkv";
import OliveGardenVideo from "../../videos/OliveGardenVideo.mkv";
import FoodDeliveryApp from "../../videos/FoodPanoramaPlates.mkv";
import ClothingSportsWear from "../../videos/ClothingSportsWear.mkv";
import Footer from "../Footer/Footer";

const portfolioVideos = {
  ArtistHarmonyHubVideo: ArtistHarmonyHubVideo,
  OliveGardenVideo: OliveGardenVideo,
  FoodDeliveryApp: FoodDeliveryApp,
  ClothingSportsWear: ClothingSportsWear,
};

function useFadeIn(direction = "left") {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Determine the direction of the animation
  const animationClass =
    direction === "left" ? "translate-x-[-100px]" : "translate-x-[100px]";

  // Combine opacity and translate classes
  const visibilityClass = inView
    ? `opacity-100 translate-x-0`
    : `opacity-0 ${animationClass}`;

  return [ref, visibilityClass];
}

function App() {
  const [headerRef, headerAnimation] = useFadeIn('left');
  const [aboutMeRef, aboutMeAnimation] = useFadeIn('right');
  const [skillSectionRef, skillSectionAnimation] = useFadeIn('left');
  const [portfolioSectionRef, portfolioSectionAnimation] = useFadeIn('right');
  return (
    <div className="bg-neutral-200 overflow-hidden">
      <Navbar />
      <div
        ref={headerRef}
        className={`transition-all duration-1000 ease-out ${headerAnimation}`}
      >
        <Header />
      </div>
      <div
        ref={aboutMeRef}
        className={`transition-all duration-1000 ease-out ${aboutMeAnimation}`}
      >
        <AboutMe />
      </div>
      <div
        ref={skillSectionRef}
        className={`transition-all duration-1000 ease-out ${skillSectionAnimation}`}
      >
        <SkillSection />
      </div>
      <div
        ref={portfolioSectionRef}
        className={`transition-all duration-1000 ease-out ${portfolioSectionAnimation}`}
      >
        <PortfolioSection portfolioVideos={portfolioVideos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
