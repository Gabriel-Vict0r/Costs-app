import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home/Home";
import NewProject from "./components/pages/NewProject/NewProject";
import Container from "./components/Layout/Container";
import NavBar from './components/Layout/NavBar/NavBar'
import Footer from './components/Layout/Footer/Footer'
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/company" element={<Company />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/newproject" element={<NewProject />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;