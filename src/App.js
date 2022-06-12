import { Route, Routes } from 'react-router-dom'
import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import DemoPage from './components/DemoPage'
import Navbar from './components/Navbar'
import Resume from './components/Resume'
import Details from './components/Details'
import Blog from './components/Blog'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DemoPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/details" element={<Details />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
