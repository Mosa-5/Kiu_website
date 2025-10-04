import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import News from "./pages/News";
import SingleNews from "./pages/SIngleNews";
import Home from "./pages/Home";
// import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="news" element={<News />}></Route>
        <Route path="/news/:id" element={<SingleNews />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
