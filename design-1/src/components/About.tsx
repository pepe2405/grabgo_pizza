import { useLang } from '../context/LangContext'
import ImageSlot from './ImageSlot'

export default function About() {
  const { t } = useLang()
  return (
    <section id="about" className="about">
      <div className="about__photos">
        <div className="about__photo about__photo--1"><ImageSlot label="Екипът" /></div>
        <div className="about__photo about__photo--2"><ImageSlot label="Фурната" /></div>
      </div>
      <div className="about__text">
        <h2>{t.about_title}</h2>
        <p className="about__lead">{t.about_1}</p>
        <p>{t.about_2}</p>
      </div>
    </section>
  )
}
