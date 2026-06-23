import { useState } from 'react'
import { Link } from 'react-router-dom'
import onoLogo from '../assets/multi-media/ono.png'

const navLinks = [
  { label: 'الرئيسية', path: '/' },
  { label: 'القضية', path: '/maryam' },
  { label: 'المكتبة', path: '/teacher-map' },
  { label: 'منتدى التحليل النقدي', path: '/community' },
  { label: 'الصوت الشخصي', path: '/my-opinion' },
  { label: 'ETPACK', path: '/bot-ai' },
  { label: 'إقرار استخدام الذكاء الاصطناعي', path: '/ai-usage' },
]

export default function Navbar() {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false)

  const handleToggleHeader = () => {
    setIsHeaderOpen((currentState) => !currentState)
  }

  return (
    <header className={`site-header ${isHeaderOpen ? 'is-open' : ''}`}>
      <div className="navbar-edge navbar-edge--right" aria-label="تاريخ المشروع">
        <img src={onoLogo} alt="ONO" />
        <span>Date: 26/6/2026</span>
      </div>

      <nav className="navbar container" aria-label="التنقل الرئيسي">
        <Link className="brand" to="/" aria-label="العودة إلى الرئيسية">
          <span className="brand__mark" aria-hidden="true">م</span>
          <span>ملجأ المعلم</span>
        </Link>

        <button
          className="navbar-toggle"
          type="button"
          aria-expanded={isHeaderOpen}
          aria-label="إظهار أو إخفاء القائمة"
          onClick={handleToggleHeader}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} onClick={() => setIsHeaderOpen(false)}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar-edge navbar-edge--left" aria-label="بيانات الإشراف والعمل">
        <span>بإشراف: Dr. Nayef awad</span>
        <span>عمل</span>
        <span>Mrs. Deema Shawar</span>
        <span>Mrs. Dalal Shaweiki</span>
      </div>

    </header>
  )
}
