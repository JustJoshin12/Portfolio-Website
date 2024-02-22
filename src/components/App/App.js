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

function App() {
  return (
    <div className="bg-neutral-200">
      <Navbar />
      <Header />
      <AboutMe />
      <SkillSection />
      <PortfolioSection portfolioVideos={portfolioVideos} />
      <Footer />
    </div>
  );
}

export default App;
