import MyVideoComponent from "../UI/MyVideoComponent/MyVideoComponent";

const PortfolioSection = ({ portfolioVideos }) => {
  return (
    <section
      id="portfolio"
      className="bg-black text-white font-[Playfair] flex flex-col gap-10 pt-24 mt-[-6rem] lg:px-6 xl:px-12 tracking-wide"
    >
      <h2 className="text-8xl py-20 flex justify-center">Portfolio</h2>
      <div
        id="artist"
        className="flex flex-col gap-8 xl:flex-row px-14 py-10 items-center border-black hover:border-purple-700 border-4 rounded-badge transition-colors duration-200"
      >
        <div className="xl:w-[50%]">
          <MyVideoComponent
            videoSrc={portfolioVideos.ArtistHarmonyHubVideo}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="xl:w-[50%]">
          <h3 className="text-4xl text-center pb-10 ">Artist Harmony Hub</h3>

          <div className="flex justify-evenly pb-8 items-center">
            <a
              href="https://github.com/JustJoshin12/Artist-HarmonyHub-Front-end.git"
              className="btn font-[playfair] hover:bg-purple-600 hover:border-purple-900"
            >
              Github
            </a>
            <div className="flex bg-purple-600 p-4 gap-5 rounded-badge border-white border hover:border-purple-900 hover:bg-neutral-300 transition-colors duration-200">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                className="w-12 h-12"
                alt="react"
              />
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                className="w-12 h-12"
                alt="tailwindcss"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                className="w-12 h-12"
                alt="mongodb"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                className="w-12 h-12"
                alt="node.js"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                className="w-12 h-12"
                alt="express.js"
              />
              <img
                src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
                className="w-12 h-12"
                alt="googlecloudplatform"
              />
            </div>
            <a
              href="https://artistharmonyhub.crabdance.com/"
              className="btn font-[playfair] hover:bg-purple-600 hover:border-purple-900"
            >
              Live
            </a>
          </div>
          <p className="px-16 text-xl text-center tracking-wide">
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
      <div
        id="oliveGarden"
        className="flex flex-col gap-8 xl:flex-row py-10 items-center border-black hover:border-green-950 border-4 rounded-badge transition-colors duration-200 lg:px-6 xl:px-12"
      >
        <div className="xl:w-[50%]">
          <h3 className="text-4xl  pb-10 text-center">
            Olive-Garden Employee Policy Tracker
          </h3>
          <div className="flex justify-evenly pb-8 items-center">
            <a
              className="btn hover:bg-green-900 transition-colors duration-200 hover:text-black"
              href="https://github.com/JustJoshin12/Olive-Garden-Alcohol-Policy-Agreement.git"
            >
              Github
            </a>
            <div className="flex bg-yellow-950 p-4 gap-5 rounded-badge border-white border hover:border-purple-900 hover:bg-neutral-300 transition-colors duration-200 items-center">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                className="w-12 h-12"
                alt="react"
              />
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                className="w-12 h-12"
                alt="tailwindcss"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                className="w-12 h-12"
                alt="css"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                className="w-14 h-16"
                alt="webpack"
              />
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                className="w-12 h-12"
                alt="git"
              />
            </div>
          </div>
          <p className="px-16 text-xl text-center tracking-wide">
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
        <div className="xl:w-[50%]">
          <MyVideoComponent
            videoSrc={portfolioVideos.OliveGardenVideo}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
      <div
        id="foodDelivery"
        className="flex flex-col gap-8 xl:flex-row py-10 items-center border-black hover:border-amber-500 border-4 rounded-badge transition-colors duration-200 lg:px-6 xl:px-12"
      >
        <div className="xl:w-[50%]">
          <MyVideoComponent
            videoSrc={portfolioVideos.FoodDeliveryApp}
            width={"100%"}
            height={"400px"}
          />
        </div>
        <div className="xl:w-[50%]">
          <h3 className="text-4xl pb-10 text-center">Josh's Panorama Plates</h3>

          <div className="flex justify-evenly pb-8 items-center">
            <a className="btn hover:bg-amber-500 transition-colors duration-200 hover:text-black">
              Github
            </a>
            <div className="flex bg-amber-500 p-4 gap-5 rounded-badge border-white border hover:border-purple-900 hover:bg-neutral-300 transition-colors duration-200 items-center">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                className="w-12 h-12"
                alt="react"
              />
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                className="w-12 h-12"
                alt="tailwindcss"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                className="w-12 h-12"
                alt="css"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
                className="w-14 h-16"
                alt="webpack"
              />
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                className="w-12 h-12"
                alt="git"
              />
            </div>
          </div>
          <p className="px-16 text-xl text-center tracking-wide">
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
      <div
        id="sportsWear"
        className="flex flex-col gap-8 xl:flex-row py-10 mb-12 items-center border-black hover:border-slate-700 border-4 rounded-badge transition-colors duration-200 lg:px-6 xl:px-12"
      >
        <div className="xl:w-[50%]">
          <h3 className="text-4xl pb-10 text-center">Sports Wear E-Commerce</h3>
          <div className="flex justify-evenly pb-8 items-center">
            <a
              className="btn hover:bg-slate-700 transition-colors duration-200 hover:text-black"
              href="https://github.com/JustJoshin12/sportwear_webpage.git"
            >
              Github
            </a>
            <div className="flex bg-slate-700 p-4 gap-5 rounded-badge border-white border hover:border-purple-900 hover:bg-neutral-300 transition-colors duration-200 items-center">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                className="w-12 h-12"
                alt="javascript"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                className="w-12 h-12"
                alt="html"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                className="w-12 h-12"
                alt="css"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                className="w-14 h-16"
                alt="linux"
              />
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                className="w-12 h-12"
                alt="git"
              />
            </div>
            <a
              className="btn hover:bg-slate-700 transition-colors duration-200 hover:text-black"
              href="https://justjoshin12.github.io/sportwear_webpage"
            >
              Live
            </a>
          </div>
          <p className="px-16 text-xl text-center">
            At Sports Wear, we are passionate about bringing the latest and most
            sought-after name-brand sports apparel directly to you. Our mission
            is to become your go-to destination for all your athletic clothing
            needs, providing a seamless and enjoyable shopping experience from
            start to finish. From global giants to niche favorites, we've
            curated a collection that meets the diverse needs and tastes of our
            customers. Whether you're a professional athlete, a fitness
            enthusiast, or someone who loves wearing comfortable, stylish sports
            gear, our range has something for everyone.
          </p>
        </div>
        <div className="xl:w-[50%]">
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
