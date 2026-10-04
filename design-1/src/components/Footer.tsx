import { INSTAGRAM_URL, WOLT_URL } from '../data/menu'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__brand">GRAB&gt;GO</span>
      <div className="footer__links">
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
        <a href={WOLT_URL} target="_blank" rel="noreferrer">Wolt</a>
        <span>© 2026</span>
      </div>
    </footer>
  )
}
