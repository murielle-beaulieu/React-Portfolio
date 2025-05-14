import styles from "./Hero.module.scss";

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`${styles.light} ${styles.accent_div}`}>
                <h1>Hello, <br></br> I'm Murielle!</h1>
                <h3>I'm a junior full stack developper</h3>
            </div>
            {/* <div className={`${styles.dark} ${styles.accent_div}`}/>
            <div className={`${styles.darker} ${styles.accent_div}`}/> */}
        </section>
    )
}

export default Hero;