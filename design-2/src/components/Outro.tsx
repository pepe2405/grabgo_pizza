import { useLang } from '../context/LangContext'

export default function Outro() {
  const { t } = useLang()
  return (
    <section className="outro">
      <h2>
        {t.outro_a} <span>{t.outro_b}</span>
      </h2>
      <a href="/#loc" className="btn btn--dark outro__btn">{t.outro_btn}</a>
    </section>
  )
}
