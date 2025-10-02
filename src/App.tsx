import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import News from './pages/news'
import SingleNews from './pages/singleNews'
// import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="news" element={<News/>}></Route>
        <Route path="/news/:id" element={<SingleNews />} />
      </Route>
    </Routes>
  )
}

export default App
