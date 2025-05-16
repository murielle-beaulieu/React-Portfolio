import { Link } from "react-router";
import styles from "./NavBar.module.scss";
function NavBar() {
  return (
    <nav className={styles.nav}>
      <section className={styles.logo}>
        <Link to="/"><h3>Murielle Beaulieu</h3></Link>
      </section>
      <section className={styles.links}>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </section>
    </nav>
  );
}

export default NavBar;
