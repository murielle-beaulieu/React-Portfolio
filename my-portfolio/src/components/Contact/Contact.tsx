import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <section className={styles.contact_section}>
        <h2>Get in touch!</h2>
      <div>
        <a
          href="https://www.linkedin.com/in/murielle-beaulieu-55b8a6267/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          Linkedin
        </a>
      </div>
      <div>
        <a href="https://github.com/murielle-beaulieu" target="_blank">
          {" "}
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          GitHub
        </a>
      </div>
      <div>
        <a href="mailto: murielle.beaulieu19@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          Email
        </a>
      </div>
    </section>
  );
}

export default Contact;