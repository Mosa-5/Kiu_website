import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import News from "./pages/News";
import SingleNews from "./pages/SIngleNews";
import Home from "./pages/Home";
import SingleProgram from "./pages/SingleProgram";
import Projects from "./pages/Projects";
import YouthUni from "./pages/YouthUni";
import Frontiers from "./pages/Frontiers";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Vacancies from "./pages/Vacancies";
import Admission from "./pages/Admission";
// import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="news" element={<News />} />
        <Route path="/news/:id" element={<SingleNews />} />
        <Route path="/programs/:id" element={<SingleProgram />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/youthuni" element={<YouthUni />} />
        <Route path="/projects/frontiers" element={<Frontiers />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="/admission" element={<Admission />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
