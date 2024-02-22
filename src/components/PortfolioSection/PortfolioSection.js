import MyVideoComponent from "../UI/MyVideoComponent/MyVideoComponent";

const PortfolioSection = ({ portfolioVideos }) => {
  return (
    <section
      id="portfolio"
      className="bg-black text-white font-[Playfair] flex flex-col gap-10 pt-24 mt-[-6rem]"
    >
      <h2 className="text-8xl py-28 flex justify-center">Portfolio</h2>
      <div id="artist" className="flex p-20">
        <div className="w-[50%]">
          <MyVideoComponent
            videoSrc={portfolioVideos.ArtistHarmonyHubVideo}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="w-[50%]">
          <a
            href="https://artistharmonyhub.crabdance.com/"
            className="hover:text-purple-500 transition-colors duration-200"
          >
            <h3 className="text-4xl text-center pb-10 ">Artist Harmony Hub</h3>
          </a>
          <p className="px-16 text-xl text-center">
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
      <div id="oliveGarden" className="flex p-20">
        <div className="w-[50%]">
          <a
            href="https://github.com/JustJoshin12/Olive-Garden-Alcohol-Policy-Agreement/blob/main/README.md"
            className="hover:text-green-900 transition-colors duration-200"
          >
            <h3 className="text-4xl  pb-10 text-center">
              Olive-Garden Employee Policy Tracker
            </h3>
          </a>
          <p className="px-16 text-xl text-center">
            This collaborative endeavor exemplifies the seamless integration of
            the React framework and Tailwind CSS to craft a sophisticated and
            adaptable web application. Its central objective revolves around
            streamlining the process for employees to review, endorse, and
            formally acknowledge the Olive Garden Alcohol Services Policy.
            Furthermore, managers derive significant benefits from the platform,
            effortlessly accessing detailed summaries of employee endorsements
            for any given lunch or dinner shift. By prioritizing responsive
            design principles, the application ensures a seamless user
            experience across various devices, optimizing viewing and
            interaction regardless of screen size. Collaborating closely with
            another engineer facilitated efficient task allocation and
            coordination, culminating in a meticulously developed and refined
            final product.
          </p>
        </div>
        <div className="w-[50%]">
          <MyVideoComponent
            videoSrc={portfolioVideos.OliveGardenVideo}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
      <div id="foodDelivery" className="flex p-20">
        <div className="w-[50%]">
          <MyVideoComponent
            videoSrc={portfolioVideos.FoodDeliveryApp}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="w-[50%]">
          <a
            href="https://github.com/JustJoshin12/Food-Ordering-App"
            className="hover:text-amber-500 transition-colors duration-200"
          >
            <h3 className="text-4xl pb-10 text-center">
              Josh's Panorama Plates
            </h3>
          </a>
          <p className="px-16 text-xl text-center">
            "Josh's Panorama Plates" is a sophisticated food ordering app,
            leveraging the power of React and Node.js to offer restaurants a
            seamless full-stack solution. With our user-friendly interface,
            customers can effortlessly navigate through a curated menu featuring
            an array of mouthwatering dishes. From appetizers to desserts, our
            platform showcases each item with stunning visuals and detailed
            descriptions, enticing users to explore and indulge in their
            culinary cravings. Customers can add items to their cart, and
            complete orders for delivery, while restaurant owners benefit from
            streamlined operations and enhanced customer service tools.
          </p>
        </div>
      </div>
      <div id="sportsWear" className="flex p-20">
        <div className="w-[50%]">
          <a href="https://justjoshin12.github.io/sportwear_webpage" className="hover:text-slate-500 transition-colors duration-200">
            <h3 className="text-4xl pb-10 text-center">
              Sports Wear E-Commerce
            </h3>
          </a>
          <p className="px-16 text-xl text-center">
            At Sports Wear, we are passionate about bringing the latest and most
            sought-after name-brand sports apparel directly to you. Our mission
            is to become your go-to destination for all your athletic clothing
            needs, providing a seamless and enjoyable shopping experience from
            start to finish. From global giants to niche favorites, we've curated
            a collection that meets the diverse needs and tastes of our
            customers. Whether you're a professional athlete, a fitness
            enthusiast, or someone who loves wearing comfortable, stylish sports
            gear, our range has something for everyone.
          </p>
        </div>
        <div className="w-[50%]">
          <MyVideoComponent
            videoSrc={portfolioVideos.ClothingSportsWear}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
