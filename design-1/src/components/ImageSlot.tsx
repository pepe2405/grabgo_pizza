interface Props {
  label: string
  src?: string
  className?: string
}

/** Photo placeholder. Pass `src` once the real photo exists in /public. */
export default function ImageSlot({ label, src, className = '' }: Props) {
  if (src) return <img className={`slot slot--img ${className}`} src={src} alt={label} />
  return (
    <div className={`slot ${className}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  )
}
