import { useLang } from '../context/LangContext'
import { REVIEWS } from '../data/locations'
import ImageSlot from './ImageSlot'

export default function Reviews() {
  const { t } = useLang()
  return (
    <section className="reviews">
      <div className="reviews__head">
        <h2>{t.rev_title}</h2>
        <span className="reviews__src">★★★★★ 5.0 · {t.rev_src}</span>
      </div>
      <div className="reviews__row">
        {REVIEWS.map((r) => (
          <figure key={r.who} className="review">
            <span className="review__stars">★★★★★</span>
            <blockquote>{r.q}</blockquote>
            <figcaption>{r.who} · Tripadvisor</figcaption>
          </figure>
        ))}
        <div className="reviews__ig"><ImageSlot label="Reel от @grabgopizza" /></div>
      </div>
    </section>
  )
}
