import type { ProjectData } from "../../services/project-services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import styles from "./ProjectCard.module.scss";
import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faFire } from "@fortawesome/free-solid-svg-icons";
import redux from "../../assets/redux.svg";
import ts from "../../assets/logo_ts.png";

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const techstack = project.tech_stack;

  return (
    <article className={styles.card}>
      <header>
        
      <h2>{project.title}</h2>
      <h3>
        See the full project {" "}
        <a href={project.project_link} target="_blank">
          here
        </a>
      </h3>
      </header>

      <img src={project.snippet} className={styles.main_img} />
      <h2>Built with:</h2>
      <div className={styles.skills}>
        {techstack?.map((skill, index) => {
          if (skill === "JavaScript") {
            return <FontAwesomeIcon key={index} icon={faJs} />;
          }

          if (skill === "React") {
            return <FontAwesomeIcon key={index} icon={faReact} />;
          }

          if (skill === "SpringBoot") {
            return <FontAwesomeIcon key={index} icon={faLeaf} />;
          }

          if (skill === "Firebase") {
            return <FontAwesomeIcon key={index} icon={faFire} />;
          }

          if (skill === "Typescript") {
            return <img src={ts} className={styles.own_logo}></img>;
          }

          if (skill === "Redux") {
            return <img src={redux} className={styles.own_logo} />;
          }

          if (skill === "Java") {
            return <FontAwesomeIcon key={index} icon={faJava} />;
          }

          return <p key={index}>{skill}</p>;
        })}
      </div>
    </article>
  );
};
