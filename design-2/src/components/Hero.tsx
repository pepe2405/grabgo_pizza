import { useLang } from '../context/LangContext'
import { WOLT_URL } from '../data/menu'
import ImageSlot from './ImageSlot'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      <div className="hero__bg"><ImageSlot label="Снимка на цял екран: парче, което се вдига от тавата" /></div>
      <div className="hero__shade" />
      <div className="hero__content">
        <div className="hero__text">
          <span className="hero__badge">
            {t.badge}<span className="hero__badge-price"> · 2,88 €</span>
          </span>
          <h1>{t.big}</h1>
          <p>{t.big_sub}</p>
          <div className="hero__cta">
            <a href="/#menu" className="btn btn--orange">{t.see_menu}</a>
            <a href={WOLT_URL} className="btn btn--white" target="_blank" rel="noreferrer">
              <span className="hero__wolt-long">{t.wolt}</span>
              <span className="hero__wolt-short">Wolt</span>
            </a>
          </div>
        </div>
        <div className="hero__seal">
          <span>{t.from}</span>
          <b>2,88 €</b>
        </div>
      </div>
    </section>
  )
}
