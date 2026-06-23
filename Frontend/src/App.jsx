import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Maryam from './pages/Maryam.jsx'
import Navbar from './components/Navbar.jsx'
import TeacherMap from './pages/TeacherMap.jsx'
import BotAI from './pages/Bot-AI.jsx'
import Community from './pages/Community.jsx'
export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/maryam" element={<Maryam />} />
        <Route path="/teacher-map" element={<TeacherMap />} />
        <Route path="/bot-ai" element={<BotAI />} />
        <Route path="/community" element={<Community />} />
        {/* <Route path="/critical-forum" element={<CriticalForum />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/important-terms" element={<ImportantTerms />} /> */}
      </Routes>
    </BrowserRouter>
  )
}