import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'القضية',
    path: '/maryam',
    description: 'مدخل قصصي لفهم تحديات المعلم في زمن الذكاء الاصطناعي.',
  },
  {
    title: 'المكتبة ( القضية و المقرر )',
    path: '/teacher-map',
    description: 'مسار يساعد المعلم على استعادة دوره وقيادة التعلم بوعي.',
  },
  {
    title: 'منتدى التحليل النقدي',
    path: '/community',
    description: 'مساحة لعرض وجهات النظر والأسئلة حول التعليم والتقنية.',
  },
  {
    title: 'الصوت الشخصي',
    path: '/my-opinion',
    description: 'الرأي الشخصي ',
  },
  {
    title: 'ETPACK',
    path: '/bot-ai',
    description: 'ETPACK, والتعلم السقراطي',
  },
  { 
    title: 'إقرار استخدام الذكاء الاصطناعي',
    path: '/ai-usage',
    description: 'إقرار استخدام الذكاء الاصطناعي بالتفصيل'
  },

]

export default function Home() {
  return (
    <div className="site-shell" dir="rtl">
      <main className="home-page">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="container">
            <p className="eyebrow">ملجأ المعلم</p>
            <h1 id="home-title">هندسة الوعي، بصمة انسانية في عصر الخوارزميات</h1>
            <p className="home-hero__text">
              موقعنا ملجأ كل معلم لتطوير مهارة الموازنة بين الكفاءة التقنية ودفء البعد الإنساني في عملية التعليم
            </p>
          </div>
        </section>


        <section className="section-cards" aria-labelledby="sections-title">
          <div className="container">
            <div className="section-cards__header">
              <p className="eyebrow">الأقسام</p>
              <h2 id="sections-title">اختر المسار الذي تريد استكشافه</h2>
              
              <p>كل بطاقة تقودك إلى مساحة مستقلة تساعدك على فهم دور المعلم في عصر الذكاء الاصطناعي.</p>
            </div>
          </div>

          <div className="container section-cards__grid">
            {sections.map((section) => (
              <Link className="section-square" to={section.path} key={section.path}>
                <span className="section-square__label">قسم</span>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <span className="section-square__arrow" aria-hidden="true">←</span>
              </Link>
            ))}
          </div>
          
        </section>
      </main>
    </div>
  )
}
