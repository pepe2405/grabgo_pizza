import { useLang } from '../context/LangContext'
import { WOLT_URL } from '../data/menu'

export default function PromoBar({ className = '' }: { className?: string }) {
  const { t } = useLang()
  return (
    <a href={WOLT_URL} className={`promo ${className}`} target="_blank" rel="noreferrer">
      {t.promo} →
    </a>
  )
}
