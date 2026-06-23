import { useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import SectionAccordion from '../components/maryam/SectionAccordion.jsx'
import { maryamContent } from '../data/maryamContent.js'

const storageKey = 'maryam-expanded-sections'

const iconBySection = {
  definition: <LightbulbOutlinedIcon />,
  framework: <AccountTreeOutlinedIcon />,
  concepts: <MenuBookOutlinedIcon />,
  references: <LibraryBooksOutlinedIcon />,
}

const maryamTheme = createTheme({
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

export default function Maryam() {
  const sections = useMemo(
    () => [
      maryamContent.definition,
      ...maryamContent.framework,
      ...maryamContent.concepts,
      maryamContent.references,
    ],
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
    <ThemeProvider theme={maryamTheme}>
      <Box className="maryam-page" component="main" dir="rtl">
        <Container maxWidth="lg">
          <Box className="maryam-hero" component="section" aria-labelledby="maryam-title">
            <Typography className="maryam-hero__eyebrow" component="p">
              قضية المعلمة مريم
            </Typography>
            <Typography id="maryam-title" className="maryam-hero__title" component="h1">
              مهنة التدريس في عالم الذكاء الاصطناعي
            </Typography>
            <Typography className="maryam-hero__lead" component="p">
              صفحة تعليمية تعرض القضية وأبعادها ومفاهيمها الأساسية بأسلوب هادئ، مع إخفاء التفاصيل حتى يختار القارئ ما يريد استكشافه.
            </Typography>
          </Box>

          <Box className="maryam-video-section" component="section" aria-labelledby="maryam-video-title">
            <Box className="maryam-video-card">
              <Box className="maryam-video-card__header">
                <Typography id="maryam-video-title" className="maryam-video-card__title" component="h2">
                  شاهد الفيديو التمهيدي
                </Typography>
                <Typography className="maryam-video-card__description" component="p">
                  يوضح هذا الفيديو أبعاد قضية مهنة التدريس في عصر الذكاء الاصطناعي، ويمهد لفهم المفاهيم المطروحة في الأقسام التالية.
                </Typography>
              </Box>

              <Box className="maryam-video-frame">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/zJa_5_AIDHg"
                  title="قضية المعلمة مريم"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </Box>
            </Box>
          </Box>

          <Box className="maryam-accordion-list" component="section" aria-label="محاور قضية مهنة التدريس">
            {sections.map((section) => (
              <SectionAccordion
                key={section.id}
                section={section}
                icon={iconBySection[section.id]}
                expanded={Boolean(expandedSections[section.id])}
                onChange={handleAccordionChange(section.id)}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}