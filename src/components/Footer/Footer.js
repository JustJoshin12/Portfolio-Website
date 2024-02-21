import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer id="contact-me" className="footer footer-center p-20 bg-base-200 text-base-content rounded font-[Playfair]">
      <nav className="grid grid-flow-col gap-20 text-xl">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-16">
          <a
            href="https://github.com/JustJoshin12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="4x" />
          </a>
          <a
            href="https://www.linkedin.com/in/joshua-smith-9b4057245"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </a>
          <a
            href="mailto:joshdevsmith.97@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="4x" />
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-xl">
          Bringing ideas to life through code is what I do best. For
          collaborations, freelance inquiries, or just to share insights, I'm
          only an email away. Thank you for considering my work.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
