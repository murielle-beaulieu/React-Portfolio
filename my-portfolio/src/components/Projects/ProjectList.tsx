import { useEffect, useState } from "react";
import { getAllProjects } from "../../services/project-services";

function ProjectList() {

    const [data, setData] = useState([]);

    const fetchData = () => {
      getAllProjects()
      .then((docs) => {
      setData(docs);
      })
      .catch((e) => {
        console.log('Failed' + e);
      });
    };
    console.log(data);

      useEffect(() => {
         fetchData();
      },[]);

    return (
        <section>
            <h1>Projects</h1>
            {data.map((p) => <img src={p.snippet}/>)}
        </section>
    )
}

export default ProjectList;