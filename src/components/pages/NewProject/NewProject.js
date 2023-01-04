import React from "react";
import ProjectForm from "../../project/Form/ProjectForm";
import styles from "./NewProject.module.css";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
  const navigate = useNavigate();
  function NavigateToProjects() {
    navigate("/projects", { state: { message: "Projeto criado com sucesso" } });
  }

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];
    const url = "http://localhost:5000/projects";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //redirect
        NavigateToProjects();
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar seus serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
};
export default NewProject;
