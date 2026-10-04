interface Props {
  value: number
  onDec: () => void
  onInc: () => void
}

export default function Stepper({ value, onDec, onInc }: Props) {
  return (
    <div className="stepper">
      <button onClick={onDec} aria-label="−">−</button>
      <span>{value}</span>
      <button onClick={onInc} aria-label="+">+</button>
    </div>
  )
}
