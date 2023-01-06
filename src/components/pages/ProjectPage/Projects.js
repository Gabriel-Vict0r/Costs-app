import Message from "../../Layout/Messages/Message";
import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../../Layout/Container";
import LinkButton from "../../Layout/LinkButton/LinkButton";
import Card from "../../project/Cards/ProjectCard";
import { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      Headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={styles.project_container}>
      <div className={styles.tittle_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto" />
      </div>
      {message && <Message type="sucess" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <Card
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.key}
            />
          ))}
      </Container>
    </div>
  );
};
export default Projects;
