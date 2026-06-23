import { useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import SectionAccordion from '../components/maryam/SectionAccordion.jsx'
import { teachermapContent } from '../data/teachermapContent.js'

const storageKey = 'teachermap-expanded-sections'
const pdfBySection = {
  tpack: [
    {
      name: 'tpack.pdf',
      url: new URL('../assets/PDFS/tpack.pdf', import.meta.url).href,
    },
  ],
  ethics: [
    {
      name: 'توجيهات.pdf',
      url: new URL('../assets/PDFS/توجيهات.pdf', import.meta.url).href,
    },
    {
      name: 'توجيهات2.pdf',
      url: new URL('../assets/PDFS/توجيهات2.pdf', import.meta.url).href,
    },
    {
      name: 'توجيهات3.pdf',
      url: new URL('../assets/PDFS/توجيهات3.pdf', import.meta.url).href,
    },
  ],
  agency: [
    {
      name: 'التأثير.pdf',
      url: new URL('../assets/PDFS/التأثير.pdf', import.meta.url).href,
    },
  ],
  bias: [],
  'human-touch': [
    {
      name: 'اللمسة.pdf',
      url: new URL('../assets/PDFS/اللمسة.pdf', import.meta.url).href,
    },
  ],
  readiness: [
    {
      name: 'نموذج الأبعاد الأربعة للاستعداد للذكاء الاصطناعي.pdf',
      url: new URL('../assets/PDFS/نموذج الأبعاد الأربعة للاستعداد للذكاء الاصطناعي.pdf', import.meta.url).href,
    },
  ],
}

const teachermapTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: '"Noto Kufi Arabic", "Tajawal", system-ui, sans-serif',
  },
})

function readExpandedState() {
  try {
    return JSON.parse(sessionStorage.getItem(storageKey)) ?? {}
  } catch {
    return {}
  }
}

export default function TeacherMap() {
  const sections = useMemo(
    () => (
      teachermapContent.sections.map((section) => ({
        id: section.id,
        title: section.title,
        description: teachermapContent.title,
        paragraphs: section.intro ? [section.intro] : [],
        chips: [],
        cards: section.points.map((point) => ({
          text: point,
        })),
        files: {
          label: 'إضافة ملفات داعمة لهذا القسم',
          items: pdfBySection[section.id] ?? [],
        },
      }))
    ),
    [],
  )

  const [expandedSections, setExpandedSections] = useState(readExpandedState)

  const handleAccordionChange = (sectionId) => (_event, isExpanded) => {
    setExpandedSections((currentState) => {
      const nextState = {
        ...currentState,
        [sectionId]: isExpanded,
      }

      sessionStorage.setItem(storageKey, JSON.stringify(nextState))
      return nextState
    })
  }

  return (
    <ThemeProvider theme={teachermapTheme}>
      <Box className="maryam-page" component="main" dir="rtl">
        <Container maxWidth="lg">
          <Box className="maryam-hero" component="section" aria-labelledby="teachermap-title">
            <Typography className="maryam-hero__eyebrow" component="p">
              {teachermapContent.eyebrow}
            </Typography>
            <Typography id="teachermap-title" className="maryam-hero__title" component="h1">
              {teachermapContent.title}
            </Typography>
          </Box>

          <Box className="maryam-accordion-list" component="section" aria-label="خريطة المعلم">
            {sections.map((section) => (
              <SectionAccordion
                key={section.id}
                section={section}
                icon={<AccountTreeOutlinedIcon />}
                expanded={Boolean(expandedSections[section.id])}
                onChange={handleAccordionChange(section.id)}
              />
            ))}
          </Box>

          <Box className="teachermap-links-panel" component="section" aria-labelledby="teachermap-links-title">
            <Box className="teachermap-links-panel__header">
              <Typography id="teachermap-links-title" className="teachermap-links-panel__title" component="h2">
                <span aria-hidden="true">🔗</span>
                {teachermapContent.importantLinks.title}
              </Typography>
              <Typography className="teachermap-links-panel__description" component="p">
                {teachermapContent.importantLinks.description}
              </Typography>
            </Box>

            <Box className="teachermap-links-list" aria-label="روابط هامة">
              {teachermapContent.importantLinks.items.map((link) => (
                <a
                  className="teachermap-link-row"
                  href={link}
                  key={link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>{link}</span>
                  <OpenInNewRoundedIcon aria-hidden="true" />
                </a>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}