import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useLang } from '../context/LangContext'

export default function Header() {
  const { t, lang, setLang } = useLang()
  const cart = useCart()
  const other = lang === 'bg' ? 'en' : 'bg'

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src="/logo.jpg" alt="Grab & Go Pizza Station" />
      </Link>
      <nav className="header__nav">
        <a href="/#menu">{t.nav_menu}</a>
        <a href="/#about">{t.nav_about}</a>
        <a href="/#loc">{t.nav_loc}</a>
      </nav>
      <div className="header__actions">
        <button className="btn-circle" onClick={() => setLang(other)} aria-label="Language">
          {other.toUpperCase()}
        </button>
        <button className="btn-cart" onClick={() => cart.setOpen(true)}>
          <span className="btn-cart__label">{t.cart} · </span>
          {cart.count}
        </button>
      </div>
    </header>
  )
}
