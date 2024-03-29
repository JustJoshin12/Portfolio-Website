import FadeThroughColorSlideshow from "../UI/FadeSlideShow/FadeSlideShow";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="bg-black text-white  px-12 py-14 mt-[-6rem]"
    >
      <h2 className="text-8xl font-[Playfair] text-white py-14 mt-16 flex-wrap text-center">
        About Me
      </h2>
      <div className="flex flex-col items-center xl:flex-row ">
        <div className="w-1/2 flex flex-col items-center justify-center relative lg:gap-10">
          <FadeThroughColorSlideshow />
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center  lg:p-7 xl:p-10 hover:bg-white hover:text-black rounded-2xl  duration-300">
          <h3 className="text-2xl pb-4 font-[Playfair] ">Background</h3>
          <p className="lg:text-lg xl:text-xl font-[Playfair] tracking-wide hover:scale-105 duration-200">
            Throughout my journey, I've acquired a diverse skill set in software
            engineering, encompassing various technologies and methodologies.
            I'm proficient in JavaScript, utilizing frameworks such as React.js
            for front-end development and Node.js with Express.js for back-end
            solutions. My expertise extends to version control using Git/Github
            and database management with MongoDB and SQL. I have a strong
            foundation in web development, with proficiency in HTML, CSS, and
            responsive web design principles. My proficiency in these
            technologies, coupled with a commitment to continuous learning and
            problem-solving, positions me as a versatile and capable software
            engineer ready to tackle a wide range of challenges in the field.
          </p>
          <div className="py-7 font-[Playfair]">
            <h3 className="text-2xl ">Education</h3>
            <p className="text-xl py-3 pl-3">
              TripleTen, Web Developer Professional Training
            </p>
            <ul className="px-3 list-disc tracking-wide hover:scale-105 duration-200">
              <li>
                Completed 690+ hours of coding in JavaScript, React.js, Node.js,
                HTML5, CSS3, BEM
              </li>
              <li>
                Developed soft skills in time management and problem-solving,
                enabling me to efficiently organize tasks and innovate solutions
                to complex challenges
              </li>
              <li>
                Developed and deployed dynamic MERN stack web application from
                scratch
              </li>
              <li>
                Learned how to efficiently organize tasks and innovate solutions
                to complex challenges
              </li>
              <li>Built RESTful APIs using Express.js and MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
