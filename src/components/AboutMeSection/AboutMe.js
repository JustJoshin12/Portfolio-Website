import PCImg from "../../images/pc-build.jpg";
import CodeImg from "../../images/codeImg.jpg";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="bg-black text-white flex flex-row px-12 py-20 mt-[-6rem]"
    >
      <div className="flex py-28">

      <div className="w-1/2 flex flex-col items-center justify-center relative">
        <img
          className="absolute top-0 left-[380px] w-[400px] h-auto z-10 border-2 rounded-badge"
          src={PCImg}
          alt="Picture of pc parts"
        />
        <img
          className="absolute top-44 left-20 w-[400px] h-[320px] pb-4 border-2 rounded-badge"
          src={CodeImg}
          alt="Picture of code"
        />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-center p-10">
        <h2 className="text-5xl font-[Playfair] text-white flex py-10 flex-wrap">
          About Me
        </h2>
        <p className="text-xl font-[Playfair]">
          Throughout my journey, I've acquired a diverse skill set in software
          engineering, encompassing various technologies and methodologies. I'm
          proficient in JavaScript, utilizing frameworks such as React.js for
          front-end development and Node.js with Express.js for back-end
          solutions. My expertise extends to version control using Git/Github
          and database management with MongoDB and SQL. I have a strong
          foundation in web development, with proficiency in HTML, CSS, and
          responsive web design principles. My proficiency in these
          technologies, coupled with a commitment to continuous learning and
          problem-solving, positions me as a versatile and capable software
          engineer ready to tackle a wide range of challenges in the field.
        </p>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;
