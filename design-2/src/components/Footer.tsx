import { INSTAGRAM_URL, WOLT_URL } from '../data/menu'

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/logo.jpg" alt="Grab & Go" />
      <div className="footer__links">
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a>
        <a href={WOLT_URL} target="_blank" rel="noreferrer">Wolt</a>
        <span>© 2026 Grab &amp; Go Pizza Station</span>
      </div>
    </footer>
  )
}
