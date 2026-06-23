import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded'

export default function NumberedConceptCard({ number, title, text, pdfs = [] }) {
  return (
    <Box className="numbered-concept-card" component="article">
      <span className="numbered-concept-card__number">{number}</span>
      <Box>
        {title && (
          <Typography component="h3" className="numbered-concept-card__title">
            {title}
          </Typography>
        )}
        <Typography className="numbered-concept-card__text">
          {text}
        </Typography>
        {pdfs.length > 0 && (
          <Box className="pdf-attachment-list" aria-label="ملفات PDF داعمة">
            {pdfs.map((pdf) => (
              <button
                className="pdf-attachment-chip"
                key={pdf.url}
                onClick={() => window.open(pdf.url, '_blank', 'noopener,noreferrer')}
                type="button"
              >
                <PictureAsPdfRoundedIcon aria-hidden="true" />
                <span>{pdf.name}</span>
              </button>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  )
}
