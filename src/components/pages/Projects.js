import Message from "../Layout/Messages/Message";
import { useLocation } from "react-router-dom";

const Projects = () => {

    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state.message;
    }
return (
  <div>
    <h1>Meus Projetos</h1>
    {message && <Message type="sucess" msg={message} />}
  </div>
);
}
export default Projects;