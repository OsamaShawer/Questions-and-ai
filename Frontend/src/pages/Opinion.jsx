import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import educationTrusteesVideo from '../assets/multi-media/امناء التعليم.mp4'

const opinionTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: '"Noto Kufi Arabic", "Tajawal", system-ui, sans-serif',
  },
})

const opinionSections = [
  {
    title: 'التعبير عن رأي شخصي',
    paragraphs: [
      'أؤمن أن دوري كمعلمة ومهندسة للوعي يتلخص في قيادة طلابي لاستخدام التقنية بحذر ونقد، مع التمسك بالقيم والمنطق البشري الذي لا تدركه الخوارزميات',
    ],
  },
  {
    title: 'موقفي المهني: التعليم كفعل إنساني لا يقبل الأتمتة',
    paragraphs: [
      'بصفتي مركزة رياضيات ومعلمة، أدرك تماما أن فهم الرياضيات لا يستند فقط إلى القوانين الجامدة، بل إلى بناء منطق بشري وفهم عميق للأنماط التي تحكم عالمنا. وبنفس المنطق، أرى أن التعليم اليوم يقف عند منعطف تاريخي يفرض علينا ألا نكتفي بتعلم كيف نستخدم الذكاء الاصطناعي، بل أن نسأل لماذا وكيف نحمي جوهر عملنا من التلاشي. إنني أؤمن إيمانا مطلقا بأن المعلم في عصر الخوارزميات يجب أن يكون مهندسا للوعي لا مجرد منفذ للمنهج أو ناقل للمعادلات.',
    ],
  },
  {
    title: 'التفكير النقدي: ما وراء الشاشات',
    paragraphs: [
      'إن خوفي الأكبر ليس من ذكاء الآلة، بل من استقالة العقل البشري من دوره النقدي. عندما نترك الآلة تتولى صياغة المسائل أو تقييم استنتاجات طلابنا الرياضية، فإننا لا نفوض مهاما فحسب، بل نتنازل تدريجيا عن الوكالة المعرفية التي هي جوهر تميزنا البشري. لذا، أعتمد في ممارستي وفي قيادتي للقسم مبدأ الشك المنهجي تجاه كل مخرجات التقنية، فالمعرفة التي تولدها الآلة تفتقر إلى السياق الاجتماعي، والعاطفي، والوطني الذي أحرص على غرسه في مبادرت خطوة(1).',
      '(1) مبادرة خطوة هي مشروع تربوي في مدرستي يسعى لتمكين طلاب الرياضيات من بناء تفكيرهم النقدي عبر دمج التكنولوجيا كأداة داعمة (سقالات فكرية) تضمن تفوقهم الأكاديمي، دون أن تفقد العملية التعليمية روحها الإنسانية أو جوهرها الأخلاقي.',
    ],
  },
  {
    title: 'رؤيتي الشخصية: اللمسة الإنسانية كبوصلة',
    paragraphs: [
      'من خلال خبرتي كمعلمة رياضيات في الميدان، أؤمن أن التكنولوجيا هي مجرد أداة للتمكين، لا بديلا عن التفكير إن التحدي الذي أواجهه يومياً هو كيف أحمي اللمسة الإنسانية في فصلي الدراسي، ففي اللحظة التي يشعر فيها الطالبة بوجودي كمعلمة ومركزة تسمعه بقلبها لا بأذنيها فقط، تنهار كل محاولات الآلة لإحلال نفسها مكاني. الذكاء الاصطناعي لا يمكنه أبداً أن يشهد نمو الطالبة العاطفي، أو أن يدرك الخلفية الخفية لمعاناتها في ظل ظروفنا الصعبة.',
    ],
  },
  {
    title: 'دعوة لاتخاذ إجراء: نحو خطوة واعية',
    paragraphs: [
      'بناءً على ما تقدم، فإنني أدعو نفسي وزملائي في قسم الرياضيات إلى تحويل مبادراتي إلى مختبر للـتفاعل الإنساني المعزز بالتقنية، لا التعليم المؤتمت. ولتحقيق ذلك، أضع الإجراءات التالية:',
    ],
    items: [
      '1) تمكين الطالبات من تفكيك التحيز: سأجعل من طالباتي محققين يبحثون عن أخطاء وتحيزات الآلة في الحلول الرياضية لنرتقي بهم إلى أعلى درجات النقد الواعي.',
      '2) استرداد سلطة التقييم :سأرفض الاعتماد الكلي على نتائج الذكاء الاصطناعي في تقييم طالباتي وسأتمسك بالتقييم القائم على الحوار، والملاحظة، وفهم طريقة تفكير الطالبة التي تعجز الخوارزميات عن استيعابها.',
      '3) ترسيخ أخلاقيات المعلم: سأظل أنا المرجع الأول والأساس لطالباتي وزميلاتي عندما تضطرب القيم في العالم الرقمي.',
      '4) تبني مبادرة ( ETPACK )',
    ],
  },
]

export default function Opinion() {
  return (
    <ThemeProvider theme={opinionTheme}>
      <Box className="opinion-page" component="main" dir="rtl">
        <Container maxWidth="lg">
          <Box className="page-video-card" component="section" aria-label="فيديو أمناء التعليم التمهيدي">
            <Box className="page-video-card__header">
              <Typography className="page-video-card__eyebrow" component="p">
                فيديو تمهيدي
              </Typography>
              <Typography className="page-video-card__title" component="h2">
                أمناء التعليم
              </Typography>
            </Box>
            <Box className="page-video-frame">
              <video controls preload="metadata">
                <source src={educationTrusteesVideo} type="video/mp4" />
              </video>
            </Box>
          </Box>

          <Box className="maryam-hero" component="section" aria-labelledby="opinion-title">
            <Typography className="maryam-hero__eyebrow" component="p">
              رأي شخصي
            </Typography>
            <Typography id="opinion-title" className="maryam-hero__title" component="h1">
              التعليم كفعل إنساني في عصر الخوارزميات
            </Typography>
          </Box>

          <Box className="opinion-card-grid">
            {opinionSections.map((section) => (
              <Box className="opinion-card" component="article" key={section.title}>
                <Typography className="opinion-card__title" component="h2">
                  {section.title}
                </Typography>

                {section.paragraphs.map((paragraph) => (
                  <Typography className="opinion-card__paragraph" component="p" key={paragraph}>
                    {paragraph}
                  </Typography>
                ))}

                {section.items && (
                  <Box className="opinion-action-grid">
                    {section.items.map((item, index) => (
                      <Box className="opinion-action-card" component="article" key={item}>
                        <span className="opinion-action-card__number">{index + 1}</span>
                        <Typography component="p">{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}