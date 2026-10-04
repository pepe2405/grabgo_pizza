import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLang } from '../context/LangContext'

/** `overlay` floats the header over the full-bleed hero (white text). */
export default function Header({ overlay }: { overlay: boolean }) {
  const { t, lang, setLang } = useLang()
  const cart = useCart()
  const other = lang === 'bg' ? 'en' : 'bg'

  return (
    <header className={`header ${overlay ? 'header--overlay' : ''}`}>
      <Link to="/" className="header__logo">
        <img src="/logo.jpg" alt="Grab & Go Pizza Station" />
      </Link>
      <nav className="header__nav">
        <a href="/#menu">{t.nav_menu}</a>
        <a href="/#about">{t.nav_about}</a>
        <a href="/#loc">{t.nav_loc}</a>
      </nav>
      <div className="header__actions">
        <button className="pill-btn" onClick={() => setLang(other)} aria-label="Language">
          {other.toUpperCase()}
        </button>
        <button className="pill-btn pill-btn--white" onClick={() => cart.setOpen(true)}>
          <span className="pill-btn__label">{t.cart} · </span>
          {cart.count}
        </button>
      </div>
    </header>
  )
}
