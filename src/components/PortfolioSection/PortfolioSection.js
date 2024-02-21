import MyVideoComponent from "../UI/MyVideoComponent/MyVideoComponent";

const PortfolioSection = ({ ArtistHarmonyHubVideo }) => {
  return (
    <section id="portfolio" className="bg-black text-white font-[Playfair] flex flex-col gap-10 pt-24 mt-[-6rem]">
      <h2 className="text-8xl py-28 flex justify-center">Portfolio</h2>
      <div className="flex p-20">
        <div className="w-[50%]">
          <MyVideoComponent
            videoSrc={ArtistHarmonyHubVideo}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="w-[50%]">
          <a
            href="https://artistharmonyhub.crabdance.com/"
            className="hover:text-purple-500 transition-colors duration-200"
          >
            <h3 className="text-4xl pl-12 pb-10 font-[]">Artist Harmony Hub</h3>
          </a>
          <p className="px-16 text-xl">
            Artist HarmonyHub is an engaging online platform that invites music
            enthusiasts to "Discover, Connect, Groove." This dynamic website
            serves as a hub where users can explore and connect with their
            favorite tunes, ensuring that every artist finds its perfect
            audience. With a user-friendly interface, Artist HarmonyHub
            facilitates the discovery of new and beloved artists, fostering a
            vibrant community of music lovers. Whether you're seeking the latest
            hits or hidden gems, this platform aims to create a harmonious space
            where the joy of music is celebrated and shared. Join the rhythm,
            discover new sounds, and connect with like-minded individuals at
            Artist HarmonyHub.
          </p>
        </div>
      </div>
      <div className="flex p-20">
        <div className="w-[50%]">
          <a href="https://artistharmonyhub.crabdance.com/" className="">
            <h3 className="text-4xl pl-12 pb-10 font-[]">ArtistHarmonyHub</h3>
          </a>
          <p className="px-16 text-xl">
            Artist HarmonyHub is an engaging online platform that invites music
            enthusiasts to "Discover, Connect, Groove." This dynamic website
            serves as a hub where users can explore and connect with their
            favorite tunes, ensuring that every artist finds its perfect
            audience. With a user-friendly interface, Artist HarmonyHub
            facilitates the discovery of new and beloved artists, fostering a
            vibrant community of music lovers. Whether you're seeking the latest
            hits or hidden gems, this platform aims to create a harmonious space
            where the joy of music is celebrated and shared. Join the rhythm,
            discover new sounds, and connect with like-minded individuals at
            Artist HarmonyHub.
          </p>
        </div>
        <div className="w-[50%]">
          <MyVideoComponent
            videoSrc={ArtistHarmonyHubVideo}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
      <div className="flex p-20">
        <div className="w-[50%]">
          <MyVideoComponent
            videoSrc={ArtistHarmonyHubVideo}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="w-[50%]">
          <a
            href="https://artistharmonyhub.crabdance.com/"
            className="hover:text-purple-500 transition-colors duration-200"
          >
            <h3 className="text-4xl pl-12 pb-10 font-[]">Artist Harmony Hub</h3>
          </a>
          <p className="px-16 text-xl">
            Artist HarmonyHub is an engaging online platform that invites music
            enthusiasts to "Discover, Connect, Groove." This dynamic website
            serves as a hub where users can explore and connect with their
            favorite tunes, ensuring that every artist finds its perfect
            audience. With a user-friendly interface, Artist HarmonyHub
            facilitates the discovery of new and beloved artists, fostering a
            vibrant community of music lovers. Whether you're seeking the latest
            hits or hidden gems, this platform aims to create a harmonious space
            where the joy of music is celebrated and shared. Join the rhythm,
            discover new sounds, and connect with like-minded individuals at
            Artist HarmonyHub.
          </p>
        </div>
      </div>
      <div className="flex p-20">
        <div className="w-[50%]">
          <a href="https://artistharmonyhub.crabdance.com/" className="">
            <h3 className="text-4xl pl-12 pb-10 ">ArtistHarmonyHub</h3>
          </a>
          <p className="px-16 text-xl">
            Artist HarmonyHub is an engaging online platform that invites music
            enthusiasts to "Discover, Connect, Groove." This dynamic website
            serves as a hub where users can explore and connect with their
            favorite tunes, ensuring that every artist finds its perfect
            audience. With a user-friendly interface, Artist HarmonyHub
            facilitates the discovery of new and beloved artists, fostering a
            vibrant community of music lovers. Whether you're seeking the latest
            hits or hidden gems, this platform aims to create a harmonious space
            where the joy of music is celebrated and shared. Join the rhythm,
            discover new sounds, and connect with like-minded individuals at
            Artist HarmonyHub.
          </p>
        </div>
        <div className="w-[50%]">
          <MyVideoComponent
            videoSrc={ArtistHarmonyHubVideo}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
      
    </section>
  );
};

export default PortfolioSection;
