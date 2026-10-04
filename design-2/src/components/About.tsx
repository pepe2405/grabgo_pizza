import { useLang } from '../context/LangContext'
import ImageSlot from './ImageSlot'

export default function About() {
  const { t } = useLang()
  return (
    <section id="about" className="about">
      <div className="about__photo"><ImageSlot label="Екипът пред витрината" /></div>
      <div className="about__text">
        <span className="about__eyebrow">{t.story}</span>
        <h2>{t.about_title}</h2>
        <p>{t.about_1}</p>
        <p className="about__second">{t.about_2}</p>
      </div>
    </section>
  )
}
