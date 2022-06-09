import logo from './logo.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Contact from './components/Contact'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
