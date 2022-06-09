import logo from './logo.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Resume from './components/Resume'
function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  )
}

export default App
