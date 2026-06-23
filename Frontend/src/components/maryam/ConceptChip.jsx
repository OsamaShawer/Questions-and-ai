import Chip from '@mui/material/Chip'

export default function ConceptChip({ label }) {
  return (
    <Chip
      className="concept-chip"
      label={label}
      size="small"
      variant="outlined"
    />
  )
}
