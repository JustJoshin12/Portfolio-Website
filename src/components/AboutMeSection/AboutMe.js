import JavascriptAssessmentImg from "../../images/javascriptAssessmentImg.png";
import CodeImg from "../../images/codeImg.PNG";
import Certificate from "../../images/certificate.png";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="bg-black text-white flex flex-row px-12 py-14 mt-[-6rem]"
    >
      <div className="flex py-28">
        <div className="w-1/2 flex flex-col items-center justify-center relative lg:gap-10">
          <img
            className="xl:absolute top-0 left-[380px] w-[400px] h-[300px] z-10 border-2 rounded-badge"
            src={Certificate}
            alt="Picture of certificate"
          />
          <img
            className="xl:absolute top-44 left-20 w-[400px] h-[300px] border-2 rounded-badge"
            src={CodeImg}
            alt="Picture of code"
          />
          <img
            className="xl:absolute bottom-0 right-20 w-[400px] h-[300px] border-2 rounded-badge"
            src={JavascriptAssessmentImg}
            alt="JavaScript Certificate"
          />
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center lg:p-3 xl:p-10">
          <h2 className="text-6xl font-[Playfair] text-white flex py-10 flex-wrap">
            About Me
          </h2>
          <h3 className="text-2xl pb-4 font-[Playfair]">Background</h3>
          <p className="lg:text-lg xl:text-xl font-[Playfair] tracking-wide">
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
            <ul className="px-3 list-disc tracking-wide">
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
