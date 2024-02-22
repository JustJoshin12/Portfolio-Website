import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="footer footer-center p-20 bg-base-200 text-base-content rounded font-[Playfair]"
    >
      <p className="text-xl font-[Playfair]">
        Please find below my contact information. Please do not hesitate to
        reach out to me at your convenience.
      </p>
      <nav className="py-8">
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
