import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'الرئيسية', path: '/' },
  { label: 'القضية', path: '/maryam' },
  { label: 'المكتبة', path: '/teacher-map' },
  { label: 'منتدى التحليل النقدي', path: '/critical-forum' },
  { label: 'فعالية الأسئلة', path: '/questions' },
  { label: 'تدريب الذكاء الاصطناعي', path: '/bot-ai' },
  { label: 'مراجع و مصطلحات', path: '/important-terms' },
]

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="التنقل الرئيسي">
        <Link className="brand" to="/" aria-label="العودة إلى الرئيسية">
          <span className="brand__mark" aria-hidden="true">م</span>
          <span>ملجأ المعلم</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
