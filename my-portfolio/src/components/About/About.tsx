import { Link } from "react-router";
import styles from "./About.module.scss";

function About() {
  return (
    <section className={styles.about}>
      <h1>About me</h1>
      <p>
        Curiosity was a core value in my family. Growing up, I was surrounded by
        parents and siblings spending their spare time both building things and taking other
        things apart! Whether it was planting a garden, building a shed or
        learning about knitting, I was encouraged to try and figure things out,
        to try to understand my environment and be involved in the world around
        me. After finishing high school, I decided to leave home and go
        travelling. I spent a few years exploring Canada and Australia, making
        friends and great memories along the way.
      </p>
      <p>
        I eventually began reflecting on my next challenge: my career!. That’s
        when I started experimenting with HTML and CSS, which sparked a
        fascination with programming. Eager to dive deeper, I enrolled in a web
        development bootcamp, where I discovered a true passion for coding. This
        passion continues to grow and it motivated me to further develop my
        skills by joining _Nology course.
      </p>
      <p>
        Since completing the program, I've had continued to work on my skills
        and continued learning on my own. I've also completed a few projects, which you can
        check out <Link to="/projects">here!</Link>
      </p>
    </section>
  );
}

export default About;
