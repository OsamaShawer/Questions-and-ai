import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined'
import WebAssetOutlinedIcon from '@mui/icons-material/WebAssetOutlined'

const aiUsageTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: '"Noto Kufi Arabic", "Tajawal", system-ui, sans-serif',
  },
})

const aiUsageTools = [
  {
    icon: <SmartToyOutlinedIcon />,
    title: 'Gemini',
    links: [
      {
        label: 'https://gemini.google.com/app ( gemini )',
        href: 'https://gemini.google.com/app',
      },
    ],
    content: [
      'إقرار استخدام أدوات الذكاء الاصطناعي',
      'أنا المعلمة ديمة شاور – دلال شويكي أقر بأنني استخدمت أداة الذكاء الاصطناعي (Gemini) كجزء من عملية إعداد هذا البحث/المهمة. أؤكد أنني قمت بمراجعة كافة المعلومات والنتائج التي تم توليدها والتحقق من دقتها وملاءمتها للموضوع.',
      'تفاصيل الاستخدام:',
      'ترتيب الأفكار وهيكلة البحث: استخدمنا الاداة جيميني للمساعدة في وضع الخطوط العريضة والمحاور الأساسية للموضوع.',
      'تطوير المحتوى: استعنّا بالأداة لتوضيح المفاهيم المتعلقة بدور المعلم المتغير (من ملقن إلى ميسّر).',
      'التدقيق والمراجعة:استخدمنا الأداة في تحسين الصياغة اللغوية وترابط الأفكار.',
      'توليد الصور: استخدمنا الأداة لتوليد صور معبرة تحاكي الموضوع',
      'توثيق المراجع بطريقة APA',
    ],
  },
  {
    icon: <VideoLibraryOutlinedIcon />,
    title: 'Higgsfield & HeyGen',
    links: [
      {
        label: 'https://higgsfield.ai',
        href: 'https://higgsfield.ai',
      },
      {
        label: 'https://app.heygen.com/home',
        href: 'https://app.heygen.com/home',
      },
    ],
    content: [
      'Higgsfield',
      'heygen',
      'توليد فيديوهات قصيرة: استخدمنا الادوات هذه لتوليد فيديوهات معبرة عن الموضوع',
    ],
  },
  {
    icon: <WebAssetOutlinedIcon />,
    title: 'Cursor & ChatGPT',
    links: [
      {
        label: 'https://cursor.com/',
        href: 'https://cursor.com/',
      },
      {
        label: 'https://chatgpt.com',
        href: 'https://chatgpt.com',
      },
    ],
    content: [
      'Cursor',
      'ChatGPT',
      'توليد الموقع و تصميمه بترتيب: استخدمنا الأداة Cursor باستعانة الmodel GPT 5.5 لتصميم موقع كمرجعية للمعلم في قضية مهنة التدريس و دور المعلم في عصر الذكاء الاصطناعي',
    ],
  },
]

export default function AiUsage() {
  return (
    <ThemeProvider theme={aiUsageTheme}>
      <Box className="ai-usage-page" component="main" dir="rtl">
        <Container maxWidth="lg">
          <Box className="maryam-hero" component="section" aria-labelledby="ai-usage-title">
            <Typography className="maryam-hero__eyebrow" component="p">
              توثيق أكاديمي
            </Typography>
            <Typography id="ai-usage-title" className="maryam-hero__title" component="h1">
              إقرار استخدام أدوات الذكاء الاصطناعي
            </Typography>
            <Typography className="maryam-hero__lead" component="p">
              عرض للأدوات التي تم استخدامها خلال إعداد البحث وتصميم الموقع وإنتاج المحتوى المرئي.
            </Typography>
          </Box>

          <Box className="ai-usage-grid">
            {aiUsageTools.map((tool) => (
              <Box className="ai-usage-card" component="article" key={tool.title}>
                <Box className="ai-usage-card__header">
                  <Box className="ai-usage-card__icon" aria-hidden="true">
                    {tool.icon}
                  </Box>
                  <Typography className="ai-usage-card__title" component="h2">
                    {tool.title}
                  </Typography>
                </Box>

                <Box className="ai-usage-links" aria-label={`روابط ${tool.title}`}>
                  {tool.links.map((link) => (
                    <a
                      className="ai-usage-link"
                      href={link.href}
                      key={link.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span>{link.label}</span>
                      <OpenInNewRoundedIcon aria-hidden="true" />
                    </a>
                  ))}
                </Box>

                <Box className="ai-usage-card__content">
                  {tool.content.map((paragraph) => (
                    <Typography component="p" key={paragraph}>
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          <Box className="ai-usage-declaration" component="section" aria-label="تعهد">
            <Box className="ai-usage-declaration__icon" aria-hidden="true">
              <AutoAwesomeOutlinedIcon />
            </Box>
            <Typography component="p">
              تعهد: أتعهد بأنني قمت بإعادة صياغة المخرجات بأسلوبي الخاص، ولم أنقلها نقلاً حرفياً دون تحليل أو إضافة شخصية.
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}