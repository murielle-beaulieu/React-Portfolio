import { useEffect, useState } from "react";
import { getAllProjects } from "../../services/project-services";
import type { ProjectData } from "../../services/project-services";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import styles from "./ProjectList.module.scss";

function ProjectList() {
  const [data, setData] = useState<ProjectData[]>([]);

  const fetchData = () => {
    getAllProjects()
      .then((docs) => setData(docs))
      .catch((e) => {
        console.log("Failed" + e);
      });
  };
  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={styles.projects}>
      <h1>Projects</h1>
      <h2>My work and recent projects, for more details checkout GitHub!</h2>
      <article className={styles.list}>
        {data.map((p) => (
          <ProjectCard project={p} />
        ))}
      </article>
    </section>
  );
}

export default ProjectList;
