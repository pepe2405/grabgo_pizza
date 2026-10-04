import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function NotFound() {
  const { t } = useLang()
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>{t.not_found}</p>
      <Link to="/" className="btn btn--dark">{t.nav_menu}</Link>
    </section>
  )
}
