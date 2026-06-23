import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Fade from '@mui/material/Fade'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded'
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded'
import ConceptChip from './ConceptChip.jsx'
import NumberedConceptCard from './NumberedConceptCard.jsx'

export default function SectionAccordion({ section, icon, expanded, onChange }) {
  const description = section.description ?? section.subtitle
  const chips = section.chips ?? []
  const paragraphs = section.paragraphs ?? []
  const cards = section.cards ?? []
  const references = section.items ?? []
  const files = section.files
  const fileItems = files?.items ?? []

  return (
    <Accordion
      className="maryam-accordion"
      expanded={expanded}
      onChange={onChange}
      disableGutters
      slotProps={{
        transition: {
          timeout: 320,
        },
      }}
    >
      <AccordionSummary
        className="maryam-accordion__summary"
        expandIcon={<ExpandMoreRoundedIcon />}
        aria-controls={`${section.id}-content`}
        id={`${section.id}-header`}
      >
        <Box className="maryam-accordion__icon" aria-hidden="true">
          {icon}
        </Box>
        <Box className="maryam-accordion__heading">
          <Typography component="h2" className="maryam-accordion__title">
            {section.title}
          </Typography>
          <Typography className="maryam-accordion__description">
            {description}
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails className="maryam-accordion__details" id={`${section.id}-content`}>
        <Fade in={expanded} timeout={360}>
          <Box>
            {chips.length > 0 && (
              <Stack className="concept-chip-list" direction="row" useFlexGap flexWrap="wrap">
                {chips.map((chip) => (
                  <ConceptChip label={chip} key={chip} />
                ))}
              </Stack>
            )}

            {paragraphs.length > 0 && (
              <Box className="maryam-accordion__paragraphs">
                {paragraphs.map((paragraph) => (
                  <Typography component="p" key={paragraph}>
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            )}

            {cards.length > 0 && (
              <Box className="numbered-concept-grid">
                {cards.map((card, index) => (
                  <NumberedConceptCard
                    key={card.title ?? card.text}
                    number={index + 1}
                    title={card.title}
                    text={card.text}
                    pdfs={card.pdfs}
                  />
                ))}
              </Box>
            )}

            {files && (
              <Box className="section-file-zone" aria-disabled="true">
                <Box className="section-file-zone__icon" aria-hidden="true">
                  <AttachFileRoundedIcon />
                </Box>
                <Box>
                  <Typography className="section-file-zone__title" component="p">
                    {files.label}
                  </Typography>
                  <Typography className="section-file-zone__hint" component="p">
                    {fileItems.length > 0
                      ? 'ملفات داعمة مرتبطة بهذا القسم'
                      : 'مساحة مخصصة لعرض أو رفع ملفات داعمة لاحقًا'}
                  </Typography>
                  {fileItems.length > 0 && (
                    <Box className="section-file-list" aria-label="ملفات PDF داعمة للقسم">
                      {fileItems.map((file) => (
                        <button
                          className="section-file-button"
                          key={file.url}
                          onClick={() => window.open(file.url, '_blank', 'noopener,noreferrer')}
                          type="button"
                        >
                          <PictureAsPdfRoundedIcon aria-hidden="true" />
                          <span>{file.name}</span>
                          <OpenInNewRoundedIcon aria-hidden="true" />
                        </button>
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
            )}

            {references.length > 0 && (
              <Box className="reference-list" aria-label="قائمة المراجع">
                {references.map((reference) => (
                  <Typography className="reference-card" component="p" key={reference}>
                    {reference}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>
        </Fade>
      </AccordionDetails>
    </Accordion>
  )
}
