import { useLang } from '../context/LangContext'
import ImageSlot from './ImageSlot'

export default function DoDont() {
  const { t } = useLang()
  return (
    <section className="dodont">
      <div className="dodont__text">
        <div className="dodont__group">
          <h3>{t.do_t}</h3>
          {t.do_l.map((x) => (
            <div key={x} className="dodont__row"><span>✓</span><span>{x}</span></div>
          ))}
        </div>
        <div className="dodont__group">
          <h3>{t.dont_t}</h3>
          {t.dont_l.map((x) => (
            <div key={x} className="dodont__row"><span>✕</span><span>{x}</span></div>
          ))}
        </div>
      </div>
      <div className="dodont__photo"><ImageSlot label="Пица излиза от фурната" /></div>
    </section>
  )
}
