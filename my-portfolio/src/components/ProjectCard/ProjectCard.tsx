import type { ProjectData } from "../../services/project-services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faJava } from "@fortawesome/free-brands-svg-icons";
import styles from "./ProjectCard.module.scss";
import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faLeaf, faFire } from "@fortawesome/free-solid-svg-icons";
import redux from "../../assets/redux.svg";
import ts from "../../assets/logo-ts.svg";

interface ProjectCardProps {
  project: ProjectData;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const techstack = project.tech_stack;

  return (
    <article className={styles.card}>
      <h2>{project.title}</h2>
      <img src={project.snippet} className={styles.main_img}/>
      <div className={styles.skills}>
        {/* {techstack?.map((skill) => (
            <li>{skill}</li>
            
        ))} */}
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
            return <img src={ts}></img>
          }

          if (skill === "Redux") {
            return <img src={redux} className={styles.redux}/>
          }

          if (skill == "Java") {
            return <FontAwesomeIcon key={index} icon={faJava} />;
          }
          // You need to return something for other cases too
          return <p key={index}>{skill}</p>;
        })}
      </div>
      <a href={project.project_link} target="_blank">
        <FontAwesomeIcon icon={faSquareGithub} className={styles.icon} />
      </a>
    </article>
  );
};
