import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Container from "./components/Layout/Container";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>
      <Container customClass="min_height">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/company" element={<Company />}></Route>
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Routes>
        <Route path="/newproject" element={<NewProject />}></Route>
      </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;