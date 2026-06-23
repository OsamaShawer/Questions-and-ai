import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Maryam from './pages/Maryam.jsx'
import Navbar from './components/Navbar.jsx'
import TeacherMap from './pages/TeacherMap.jsx'
import BotAI from './pages/Bot-AI.jsx'
import Community from './pages/Community.jsx'
import Opinion from './pages/Opinion.jsx'
import AiUsage from './pages/Ai-usage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/maryam" element={<Maryam />} />
        <Route path="/teacher-map" element={<TeacherMap />} />
        <Route path="/bot-ai" element={<BotAI />} />
        <Route path="/community" element={<Community />} />
        <Route path="/my-opinion" element={<Opinion />} ></Route>
        <Route path="/ai-usage" element={<AiUsage />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}