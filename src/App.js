import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import DemoPage from './components/DemoPage'
import Navbar from './components/Navbar'
import Resume from './components/Resume'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<DemoPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
