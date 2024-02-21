import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutMe from "../AboutMeSection/AboutMe";
import SkillSection from "../SkillSection/SkillSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import ArtistHarmonyHubVideo from "../../videos/ArtistHarmonyHubVideo.MOV";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="bg-neutral-200">
      <Navbar />
      <Header />
      <AboutMe />
      <SkillSection />
      <PortfolioSection ArtistHarmonyHubVideo={ArtistHarmonyHubVideo} />
      <Footer />
    </div>
  );
}

export default App;
