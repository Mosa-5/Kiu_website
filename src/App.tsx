import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
// import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Layout/>}/>
    </Routes>
  )
}

export default App
