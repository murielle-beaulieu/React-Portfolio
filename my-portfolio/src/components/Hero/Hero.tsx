import styles from "./Hero.module.scss";
import murielle from "../../assets/murielle.png";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.accent_div}>
                <h1>Hello, <br></br> I'm Murielle!</h1>
                <h3>I'm a junior full stack developer</h3>
            </div>
            <div className={`${styles.accent_div} ${styles.img_div}`}>
                <img src={murielle} />
            </div>
        </section>
    )
}

export default Hero;