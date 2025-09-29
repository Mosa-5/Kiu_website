import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
// import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
