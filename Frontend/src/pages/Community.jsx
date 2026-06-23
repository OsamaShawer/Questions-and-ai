import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'
import Skeleton from '@mui/material/Skeleton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded'
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined'
import SendRoundedIcon from '@mui/icons-material/SendRounded'

const communityApi = 'https://ai-backend-production-9a37.up.railway.app/api/community'

const communityTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: '"Noto Kufi Arabic", "Tajawal", system-ui, sans-serif',
  },
})

const initialFormState = {
  username: '',
  opinion: '',
}

const communityCriticalContent = [
  {
    title: 'التحليل النقدي للقضية',
    paragraphs: [
      'تتمحور القضية حول التوتر الجدلي بين تسارع الابتكار التقني وضرورة الحفاظ على المركزية الإنسانية في التعليم. يتطلب هذا التحول تجاوز النظرة التقنية الضيقة نحو تبني رؤية تربوية تعيد تعريف دور المعلم من ناقل للمعلومات إلى مصمم للتجربة التعليمية وموجّه أخلاقي .(Mishra, Warr, & Islam, 2023)',
    ],
  },
  {
    title: 'الحجج المؤيدة والمعارضة',
    groups: [
      {
        title: 'أ) الحجج المؤيدة:',
        items: [
          '1) يعمل الذكاء الاصطناعي كأداة سقالة فكرية تعزز قدرات الطالب المعرفية وتوفر فرصاً للتعلم المخصص والشخصي .(Mishra, Warr, & Islam, 2023)',
          '2) يساهم في تطوير محو الأمية بالذكاء الاصطناعي التي تعد مهارة ضرورية للطلاب في سوق العمل المستقبلي (Ng, Leung, Chu, & Qiao, 2021) .',
        ],
      },
      {
        title: 'ب) الحجج المعارضة (التحديات):',
        items: [
          '1) وجود تحيز خوارزمي كامن في النماذج قد يرسخ عدم المساواة في الفرص التعليمية إذا لم يتم التعامل معه بنقد واعي  .(Ng, Leung, Chu, & Qiao, 2021)',
          `2) خطر التأثير السلبي على النمو العاطفي والنمو العصبي للطفل نتيجة الاعتماد المفرط على التفاعل مع الآلة
 .(Li & Lee, 2025)`,
          '3) تهديد الوكالة المعرفية  للطالب عند إضفاء الطابع الإنساني على الآلات  .(Li & Lee, 2025)',
        ],
      },
    ],
  },
  {
    title: 'توصيات ومقترحات إجرائية',
    groups: [
      {
        items: [
          `1) تبني الشك المنهجي : يجب تدريب المعلمين والطلاب على ممارسة الشك المنهجي تجاه مخرجات الذكاء الاصطناعي لتفكيكها نقدياً، بدلاً من القبول السلبي
.(Mishra, Warr, & Islam, 2023; Ng, Leung, Chu, & Qiao, 2021)`,
          '2) تعزيز جاهزية المعلمين:  لا يجب أن تقتصر جاهزية المعلم على المهارة التقنية، بل يجب أن تشمل فهم الأبعاد الأخلاقية والتربوية (Wang et al., 2023; Ayanwale et al., 2022)',
          '3) الحفاظ على اللمسة الإنسانية:  يجب أن تظل العملية التعليمية محكومة بوجود بشري دائم، مع التأكيد على أن العلاقات الإنسانية هي العنصر غير القابل للاستبدال  .(UNESCO, 2023; Mishra, Warr, & Islam, 2023)',
          `4) إرساء سياسات الشفافية: ضرورة وضع أطر مؤسسية تضمن المساءلة والشفافية في استخدام الأدوات المؤتمتة، خاصة فيما يتعلق بتقييم الطلاب واتخاذ القرارات
 .(Ministry of Science and Technology, 2023; Israel Democracy Institute, 2023)`,
        ],
      },
    ],
  },
]

export default function Community() {
  const [formValues, setFormValues] = useState(initialFormState)
  const [fieldErrors, setFieldErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [opinions, setOpinions] = useState([])
  const [isFetchingOpinions, setIsFetchingOpinions] = useState(true)
  const [fetchError, setFetchError] = useState('')
  const [openCriticalCards, setOpenCriticalCards] = useState({})

  const handleCriticalCardToggle = (title) => {
    setOpenCriticalCards((currentCards) => ({
      ...currentCards,
      [title]: !currentCards[title],
    }))
  }

  const fetchOpinions = useCallback(async () => {
    setIsFetchingOpinions(true)
    setFetchError('')

    try {
      const response = await axios.get(`${communityApi}/opinions`)
      setOpinions(Array.isArray(response.data) ? response.data : [])
    } catch (error) {
      setFetchError(error.response?.data?.message ?? 'تعذر تحميل آراء المجتمع.')
    } finally {
      setIsFetchingOpinions(false)
    }
  }, [])

  useEffect(() => {
    const fetchTimer = window.setTimeout(fetchOpinions, 0)

    return () => window.clearTimeout(fetchTimer)
  }, [fetchOpinions])

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))

    if (fieldErrors[name]) {
      setFieldErrors((currentErrors) => ({
        ...currentErrors,
        [name]: '',
      }))
    }
  }

  const validateForm = () => {
    const errors = {}

    if (!formValues.username.trim()) {
      errors.username = 'اسم المستخدم مطلوب'
    }

    if (!formValues.opinion.trim()) {
      errors.opinion = 'الرأي مطلوب'
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })

    if (!validateForm()) {
      setStatus({ type: 'error', message: 'يرجى تعبئة جميع الحقول المطلوبة.' })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await axios.post(`${communityApi}/opinion`, {
        username: formValues.username.trim(),
        opinion: formValues.opinion.trim(),
      })

      setStatus({
        type: 'success',
        message: response.data?.message ?? 'تم إرسال رأيك بنجاح.',
      })
      setFormValues(initialFormState)
      fetchOpinions()
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message ?? 'تعذر إرسال الرأي. حاول مرة أخرى.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ThemeProvider theme={communityTheme}>
      <Box className="community-page" component="main" dir="rtl">
        <Container maxWidth="lg">
          <Box className="maryam-hero" component="section" aria-labelledby="community-title">
            <Typography className="maryam-hero__eyebrow" component="p">
              منتدى التحليل النقدي
            </Typography>
            <Typography id="community-title" className="maryam-hero__title" component="h1">
              شارك رأيك حول الذكاء الاصطناعي
            </Typography>
            <Typography className="maryam-hero__lead" component="p">
              نرحب بآرائكم وتجاربكم حول تأثير الذكاء الاصطناعي على التعليم ودور المعلم في المستقبل.
            </Typography>
          </Box>

          <Box className="community-critical-section" component="section" aria-label="التحليل النقدي للقضية">
            {communityCriticalContent.map((section) => (
              <Box className="community-critical-card" component="article" key={section.title}>
                <Box className="community-critical-card__header">
                  <Typography className="community-critical-card__title" component="h2">
                    {section.title}
                  </Typography>

                  <button
                    className={`community-critical-toggle ${openCriticalCards[section.title] ? 'is-open' : ''}`}
                    type="button"
                    aria-expanded={Boolean(openCriticalCards[section.title])}
                    aria-label={`عرض أو إخفاء ${section.title}`}
                    onClick={() => handleCriticalCardToggle(section.title)}
                  >
                    <ExpandMoreRoundedIcon aria-hidden="true" />
                  </button>
                </Box>

                {openCriticalCards[section.title] && (
                  <Box className="community-critical-card__content">
                    {section.paragraphs?.map((paragraph) => (
                      <Typography className="community-critical-card__paragraph" component="p" key={paragraph}>
                        {paragraph}
                      </Typography>
                    ))}

                    {section.groups?.map((group, groupIndex) => (
                      <Box className="community-critical-group" key={group.title ?? groupIndex}>
                        {group.title && (
                          <Typography className="community-critical-group__title" component="h3">
                            {group.title}
                          </Typography>
                        )}

                        <Box className="community-critical-grid">
                          {group.items.map((item, index) => (
                            <Box className="community-critical-point" component="article" key={item}>
                              <span className="community-critical-point__number">{index + 1}</span>
                              <Typography component="p">{item}</Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          <Box className="community-form-card" component="section" aria-label="نموذج مشاركة الرأي">
            <Box className="community-form-card__header">
              <Typography component="h2">رأيك يثري الحوار التربوي</Typography>
              <Typography component="p">
                اكتب رأيك بلغة واضحة ومتفكرة، وشاركنا تصورك لدور المعلم في عالم تتسارع فيه أدوات الذكاء الاصطناعي.
              </Typography>
            </Box>

            <Box className="community-form" component="form" noValidate onSubmit={handleSubmit}>
              <TextField
                error={Boolean(fieldErrors.username)}
                fullWidth
                helperText={fieldErrors.username}
                label="اسم المستخدم"
                name="username"
                onChange={handleChange}
                placeholder="اكتب اسمك هنا"
                required
                value={formValues.username}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonRoundedIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <TextField
                error={Boolean(fieldErrors.opinion)}
                fullWidth
                helperText={fieldErrors.opinion}
                label="رأيك حول قضية الذكاء الاصطناعي"
                minRows={7}
                multiline
                name="opinion"
                onChange={handleChange}
                placeholder="شاركنا رأيك حول تأثير الذكاء الاصطناعي على التعليم، وكيف يمكن للمعلم الحفاظ على دوره الإنساني والمعرفي."
                required
                value={formValues.opinion}
              />

              {status.message && (
                <Alert className="community-alert" severity={status.type}>
                  {status.message}
                </Alert>
              )}

              <Button
                className="community-submit-button"
                disabled={isSubmitting}
                endIcon={isSubmitting ? <CircularProgress color="inherit" size={18} /> : <SendRoundedIcon />}
                type="submit"
                variant="contained"
              >
                {isSubmitting ? 'جارٍ الإرسال...' : 'إرسال الرأي'}
              </Button>
            </Box>
          </Box>

          <Box className="community-opinions-section" component="section" aria-labelledby="community-opinions-title">
            <Box className="community-opinions-header">
              <Box>
                <Typography className="community-opinions-header__eyebrow" component="p">
                  مساحة المجتمع
                </Typography>
                <Typography id="community-opinions-title" component="h2">
                  آراء المجتمع
                </Typography>
                <Typography component="p">
                  استكشف آراء وتجارب الآخرين حول الذكاء الاصطناعي والتعليم.
                </Typography>
              </Box>

              <Box className="community-opinions-counter" aria-label={`عدد المشاركات ${opinions.length}`}>
                عدد المشاركين: {opinions.length}
              </Box>
            </Box>

            {isFetchingOpinions && (
              <Box className="community-opinions-grid" aria-label="جارٍ تحميل آراء المجتمع">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Box className="community-opinion-card community-opinion-card--skeleton" key={index}>
                    <Box className="community-opinion-card__top">
                      <Skeleton animation="wave" className="community-skeleton-avatar" variant="circular" />
                      <Box className="community-skeleton-lines">
                        <Skeleton animation="wave" height={24} width="45%" />
                        <Skeleton animation="wave" height={18} width="32%" />
                      </Box>
                    </Box>
                    <Skeleton animation="wave" height={18} width="100%" />
                    <Skeleton animation="wave" height={18} width="92%" />
                    <Skeleton animation="wave" height={18} width="72%" />
                  </Box>
                ))}
              </Box>
            )}

            {!isFetchingOpinions && fetchError && (
              <Box className="community-opinions-error" role="alert">
                <Box className="community-opinions-error__icon" aria-hidden="true">
                  <ReportProblemOutlinedIcon />
                </Box>
                <Box>
                  <Typography component="h3">حدث خطأ أثناء تحميل الآراء</Typography>
                  <Typography component="p">{fetchError}</Typography>
                </Box>
                <Button
                  className="community-retry-button"
                  onClick={fetchOpinions}
                  startIcon={<RefreshRoundedIcon />}
                  type="button"
                  variant="outlined"
                >
                  إعادة المحاولة
                </Button>
              </Box>
            )}

            {!isFetchingOpinions && !fetchError && opinions.length === 0 && (
              <Box className="community-empty-state">
                <Box className="community-empty-state__icon" aria-hidden="true">
                  <ChatBubbleOutlineRoundedIcon />
                </Box>
                <Typography component="h3">لا توجد آراء بعد</Typography>
                <Typography component="p">كن أول من يشارك رأيه حول الذكاء الاصطناعي.</Typography>
              </Box>
            )}

            {!isFetchingOpinions && !fetchError && opinions.length > 0 && (
              <Box className="community-opinions-grid">
                {opinions.map((opinion) => (
                  <Box className="community-opinion-card" component="article" key={opinion.id}>
                    <Box className="community-opinion-card__top">
                      <Avatar className="community-opinion-card__avatar">
                        {getUsernameInitial(opinion.username)}
                      </Avatar>
                      <Box>
                        <Typography className="community-opinion-card__username" component="h3">
                          {opinion.username}
                        </Typography>
                        <Typography className="community-opinion-card__date" component="p">
                          {formatOpinionDate(opinion.createdAt)}
                        </Typography>
                      </Box>
                    </Box>

                    <Divider className="community-opinion-card__divider" />

                    <Typography className="community-opinion-card__text" component="p">
                      {opinion.opinion}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

function getUsernameInitial(username) {
  return username?.trim()?.charAt(0)?.toUpperCase() || '؟'
}

function formatOpinionDate(dateValue) {
  if (!dateValue) return ''

  return new Intl.DateTimeFormat('ar', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(dateValue))
}