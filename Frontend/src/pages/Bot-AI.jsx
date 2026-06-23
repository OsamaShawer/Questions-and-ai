import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined'
import etpackVideo from '../assets/multi-media/ETPACK.mp4'

const botTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: '"Noto Kufi Arabic", "Tajawal", system-ui, sans-serif',
  },
})

export default function BotAI() {
  return (
    <ThemeProvider theme={botTheme}>
      <Box className="bot-ai-page" component="main" dir="rtl">
        <Container maxWidth="lg">
          <Box className="page-video-card" component="section" aria-label="فيديو ETPACK التمهيدي">
            <Box className="page-video-card__header">
              <Typography className="page-video-card__eyebrow" component="p">
                فيديو تمهيدي
              </Typography>
              <Typography className="page-video-card__title" component="h2">
                مبادرة ETPACK
              </Typography>
            </Box>
            <Box className="page-video-frame">
              <video controls preload="metadata">
                <source src={etpackVideo} type="video/mp4" />
              </video>
            </Box>
          </Box>

          <Box className="bot-ai-intro" component="section" aria-labelledby="bot-ai-title">
            <Box className="bot-ai-intro__icon" aria-hidden="true">
              <PsychologyAltOutlinedIcon />
            </Box>
            <Box>
              <Typography className="bot-ai-intro__eyebrow" component="p">
                تدريب الذكاء الاصطناعي
              </Typography>
              <Typography id="bot-ai-title" className="bot-ai-intro__title" component="h1">
                ETPACK والرفيق الذكي في التعليم
              </Typography>
              <Typography className="bot-ai-intro__text" component="p">
                تُمثل مبادرة ETPACK الجسر الذي يربط بين البراعة التقنية والتربوية في نموذج TPACK، وبين جوهر الروح الإنسانية من خلال دمج الأخلاقيات (Ethics) كركيزة أساسية، وتوظيف الذكاء الاصطناعي (AI) كرفيق ذكي مُدرب تحت إشراف المعلم، ليتبنى الحوار السقراطي (Socratic Method) أسلوباً لتنمية التفكير النقدي، مما يحول التعلم إلى تجربة إنسانية ملهمة وموجهة قيميًا.
              </Typography>
              <Box className="bot-ai-important-link">
                <Box>
                  <Typography className="bot-ai-important-link__label" component="p">
                    رابط مهم للتجربة والتطبيق
                  </Typography>
                  <Typography className="bot-ai-important-link__text" component="p">
                    استخدم هذا الرابط للوصول إلى الرفيق الذكي المرتبط بالمبادرة واستكشاف طريقة توظيفه في دعم التفكير النقدي.
                  </Typography>
                </Box>
                <a
                  className="bot-ai-important-link__button"
                  href="https://gemini.google.com/gem/1yropRYNTMB3wVKKigHJGcE7IPPiRnGwl?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  فتح الرابط
                  <OpenInNewRoundedIcon aria-hidden="true" />
                </a>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}