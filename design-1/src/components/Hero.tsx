import { useLang } from '../context/LangContext'
import { WOLT_URL } from '../data/menu'
import ImageSlot from './ImageSlot'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      <h1 className="hero__title">{t.h1a}</h1>
      <p className="hero__sub">{t.sub}</p>
      <div className="hero__cta">
        <a href="/#menu" className="btn btn--dark">{t.see_menu}</a>
        <a href={WOLT_URL} className="btn btn--light" target="_blank" rel="noreferrer">{t.wolt}</a>
      </div>
      <div className="hero__photo hero__photo--1"><ImageSlot label="Парче отблизо" /></div>
      <div className="hero__photo hero__photo--2"><ImageSlot label="Гости" /></div>
      <div className="sticker sticker--price">
        <span>{t.from}</span>
        <b>2,88€</b>
      </div>
      <div className="sticker sticker--late">{t.late}</div>
      <div className="sticker sticker--mutti">Mutti ♥</div>
    </section>
  )
}
